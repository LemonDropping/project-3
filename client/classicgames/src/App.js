import React, { useEffect } from 'react';
import './App.css';
import Paddle from './components/games/pong/Paddle';
import Ball from './components/games/pong/Ball';
import usePongGame from './usePongGame';

const App = () => {
  const { paddleA, paddleB, ball, movePaddleA, movePaddleB } = usePongGame();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'w' || e.key === 's') {
        movePaddleA(paddleA.y + (e.key === 's' ? 20 : -20));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        movePaddleB(paddleB.y + (e.key === 'ArrowDown' ? 20 : -20));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paddleA, movePaddleA, movePaddleB]);

  return (
    <div className="App" style={{ position: 'relative', width: 600, height: 400, backgroundColor: 'black' }}>
      <Paddle style={{ left: 10, top: paddleA.y }} />
      <Paddle style={{ right: 10, top: paddleB.y }} />
      <Ball style={{ left: ball.x, top: ball.y }} />
    </div>
  );
};

export default App
