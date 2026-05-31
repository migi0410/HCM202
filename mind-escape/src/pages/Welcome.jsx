import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../context/GameContext';

const Welcome = () => {
  const [name, setName] = useState('');
  const { startGame } = useContext(GameContext);
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    if (name.trim()) {
      startGame(name.trim());
      navigate('/home');
    }
  };

  return (
    <div className="welcome-container glass-panel">
      <h2>HCM Mind Escape</h2>
      <p>Khám phá tư tưởng Hồ Chí Minh qua hành trình giải mã không gian.</p>
      
      <form onSubmit={handleStart}>
        <input 
          type="text" 
          className="welcome-input" 
          placeholder="Nhập tên nhà thám hiểm..." 
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          required
        />
        <button type="submit" className="btn" disabled={!name.trim()}>
          Bắt Đầu Hành Trình
        </button>
      </form>
    </div>
  );
};

export default Welcome;
