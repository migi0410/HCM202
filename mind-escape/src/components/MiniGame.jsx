import React, { useState } from 'react';

const MiniGame = ({ type, data, onComplete }) => {
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'fill_in_the_blank') {
      if (inputVal.toLowerCase().trim() === data.answer.toLowerCase()) {
        setError(false);
        onComplete();
      } else {
        setError(true);
      }
    }
  };

  const handleSelect = (choice) => {
    if (choice === data.answer) {
      setError(false);
      onComplete();
    } else {
      setError(true);
    }
  };

  return (
    <div className="minigame-container">
      <h3>🚀 Thử Thách Mở Khóa:</h3>
      <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{data.question}</p>

      {type === 'fill_in_the_blank' && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="game-input"
            placeholder="Nhập mã giải mã..."
            autoFocus
          />
          <button type="submit" className="btn">Kích Hoạt</button>
        </form>
      )}

      {type === 'multiple_choice' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {data.choices.map((choice, i) => (
            <button 
              key={i} 
              className="choice-btn"
              onClick={() => handleSelect(choice)}
            >
              <span style={{ color: 'var(--primary)', fontWeight: 'bold', marginRight: '10px' }}>{String.fromCharCode(65 + i)}.</span> {choice}
            </button>
          ))}
        </div>
      )}

      {error && (
        <div style={{ color: 'var(--danger)', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', animation: 'pulse 0.5s ease' }}>
          <span style={{ fontSize: '1.2rem' }}>⚠️</span> <strong>Cảnh báo:</strong> Sai mã truy cập. Vui lòng thử lại!
        </div>
      )}
    </div>
  );
};

export default MiniGame;
