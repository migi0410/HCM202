import React, { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [completedRooms, setCompletedRooms] = useState([]); // store room IDs
  const [keysCollected, setKeysCollected] = useState(0);

  // Timer logic
  useEffect(() => {
    let interval;
    if (startTime && completedRooms.length < 5) {
      interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, completedRooms.length]);

  const completeRoom = (roomId) => {
    if (!completedRooms.includes(roomId)) {
      setCompletedRooms(prev => [...prev, roomId]);
      setKeysCollected(prev => prev + 1);
    }
  };

  const startGame = (name) => {
    setPlayerName(name);
    setStartTime(Date.now());
    setTimeElapsed(0);
    setCompletedRooms([]);
    setKeysCollected(0);
  };

  return (
    <GameContext.Provider value={{
      playerName,
      timeElapsed,
      completedRooms,
      keysCollected,
      completeRoom,
      startGame
    }}>
      {children}
    </GameContext.Provider>
  );
};
