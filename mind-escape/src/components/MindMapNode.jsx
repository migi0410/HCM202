import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../context/GameContext';
import { CheckCircle } from 'lucide-react';

const MindMapNode = ({ id, title, x, y, delay }) => {
  const { completedRooms } = useContext(GameContext);
  const isCompleted = completedRooms.includes(id);

  return (
    <Link 
      to={`/room/${id}`} 
      className={`node ${isCompleted ? 'completed' : ''}`}
      style={{ 
        left: `calc(50% + ${x}px - 60px)`, 
        top: `calc(50% + ${y}px - 60px)`,
        animationDelay: `${delay}s`
      }}
    >
      {isCompleted && <CheckCircle size={24} color="#00ff00" style={{ marginBottom: '5px' }} />}
      <span>{title}</span>
    </Link>
  );
};

export default MindMapNode;
