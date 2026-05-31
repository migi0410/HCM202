import React, { useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import { useNavigate } from 'react-router-dom';
import MindMapNode from '../components/MindMapNode';

const Home = () => {
  const { playerName, keysCollected, completedRooms } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!playerName) {
      navigate('/');
    }
  }, [playerName, navigate]);

  const nodes = [
    { id: '1', title: 'Cuộc đời & Sự nghiệp', x: 0, y: -220, delay: 0.1 },
    { id: '2', title: 'Độc lập dân tộc', x: 200, y: -70, delay: 0.2 },
    { id: '3', title: 'Chủ nghĩa xã hội', x: 130, y: 170, delay: 0.3 },
    { id: '4', title: 'Đạo đức Hồ Chí Minh', x: -130, y: 170, delay: 0.4 },
    { id: '5', title: 'Đại đoàn kết', x: -200, y: -70, delay: 0.5 }
  ];

  const handleFinish = () => {
    navigate('/result');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="mind-map-container">
        <div className="central-node">
          TƯ TƯỞNG<br/>HỒ CHÍ MINH
        </div>
        
        {/* Draw lines (using SVG) */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
          {nodes.map(node => (
            <line 
              key={`line-${node.id}`}
              x1="50%" 
              y1="50%" 
              x2={`calc(50% + ${node.x}px)`} 
              y2={`calc(50% + ${node.y}px)`} 
              className={`map-line ${completedRooms.includes(node.id) ? 'completed' : ''}`}
            />
          ))}
        </svg>

        {nodes.map(node => (
          <MindMapNode key={node.id} {...node} />
        ))}
      </div>

      {keysCollected === 5 && (
        <button className="btn" onClick={handleFinish} style={{ marginTop: '2rem', animation: 'pulse 1s infinite alternate' }}>
          Hoàn thành khóa học 🚀
        </button>
      )}
    </div>
  );
};

export default Home;
