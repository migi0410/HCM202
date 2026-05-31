import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';

import Welcome from './pages/Welcome';
import Home from './pages/Home';
import EscapeRoom from './pages/EscapeRoom';
import Result from './pages/Result';
import Header from './components/Header';

function App() {
  return (
    <GameProvider>
      <Router>
        <div className="app-container">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/room/:roomId" element={<EscapeRoom />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;
