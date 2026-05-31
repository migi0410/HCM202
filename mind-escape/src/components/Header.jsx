import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Key, Clock, Home } from 'lucide-react';

const Header = () => {
  const { playerName, timeElapsed, keysCollected } = useContext(GameContext);
  const navigate = useNavigate();
  const location = useLocation();

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (location.pathname === '/') return null;

  return (
    <div className="header glass-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => navigate('/home')}>
        <Home size={24} color="var(--primary)" />
        <h1>HCM Mind Escape</h1>
      </div>
      
      {playerName && (
        <div className="header-stats">
          <div title="Người chơi">👤 {playerName}</div>
          <div title="Thời gian" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={20} /> {formatTime(timeElapsed)}
          </div>
          <div title="Chìa khóa" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb703' }}>
            <Key size={20} /> {keysCollected} / 5
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
