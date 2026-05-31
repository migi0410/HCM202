import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../context/GameContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, query, orderBy, limit, getDocs } from 'firebase/firestore';

const Result = () => {
  const { playerName, timeElapsed, keysCollected, startGame } = useContext(GameContext);
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!playerName) {
      navigate('/');
      return;
    }

    const saveAndFetchResults = async () => {
      try {
        // 1. Save current player result
        if (keysCollected === 5) {
          await addDoc(collection(db, "leaderboard"), {
            playerName,
            timeElapsed,
            keysCollected,
            timestamp: new Date()
          });
        }

        // 2. Fetch Leaderboard
        const q = query(collection(db, "leaderboard"), orderBy("timeElapsed", "asc"), limit(10));
        const querySnapshot = await getDocs(q);
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });
        setLeaderboard(fetchedData);
      } catch (error) {
        console.error("Firebase Error:", error);
        // Fallback or error handling can be done here
      } finally {
        setLoading(false);
      }
    };

    saveAndFetchResults();
  }, [playerName, timeElapsed, keysCollected, navigate]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleReplay = () => {
    startGame(playerName); // Reset game with same name
    navigate('/home');
  };

  return (
    <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>🎉 Chúc Mừng!</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Nhà nghiên cứu: <strong>{playerName}</strong></p>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Thời gian hoàn thành: <span style={{ color: '#00ff00', fontWeight: 'bold' }}>{formatTime(timeElapsed)}</span>
      </p>

      <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>🏆 Bảng Xếp Hạng Top 10</h3>
      
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Hạng</th>
              <th>Người Chơi</th>
              <th>Thời Gian</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={user.id} style={{ background: user.playerName === playerName ? 'rgba(255, 183, 3, 0.2)' : 'transparent' }}>
                <td>#{index + 1}</td>
                <td>{user.playerName}</td>
                <td>{formatTime(user.timeElapsed)}</td>
              </tr>
            ))}
            {leaderboard.length === 0 && (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center' }}>Chưa có dữ liệu. Do cấu hình Firebase bị thiếu.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <button className="btn" onClick={handleReplay} style={{ marginTop: '2rem' }}>
        Chơi Lại
      </button>
    </div>
  );
};

export default Result;
