import React, { useRef, useState, useEffect, useCallback } from 'react';
import './pong-styles/styles.css';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paddlePosition, setPaddlePosition] = useState({ x: 10, y: 200 });
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 200 });
  const [ballDirection, setBallDirection] = useState({ x: 2, y: 2 });

  const paddleHeight = 100;
  const paddleWidth = 15;
  const ballRadius = 8;

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const draw = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.fillStyle = 'white';
          ctx.fillRect(paddlePosition.x, paddlePosition.y, paddleWidth, paddleHeight);

          ctx.beginPath();
          ctx.arc(ballPosition.x, ballPosition.y, ballRadius, 0, Math.PI * 2, false);
          ctx.fillStyle = 'white';
          ctx.fill();
          ctx.closePath();
        }
      };

      const interval = setInterval(() => {
        draw();
      }, 1000 / 60);

      return () => clearInterval(interval);
    }
  }, [ballPosition, paddlePosition]);

  const updateBallPosition = useCallback(() => {
    if (
      ballPosition.x - ballRadius <= paddlePosition.x + paddleWidth &&
      ballPosition.y >= paddlePosition.y &&
      ballPosition.y <= paddlePosition.y + paddleHeight
    ) {
      setBallDirection({ ...ballDirection, x: -ballDirection.x });
    }

    if (canvasRef.current) {
      if (ballPosition.y - ballRadius <= 0 || ballPosition.y + ballRadius >= canvasRef.current.height) {
        setBallDirection({ ...ballDirection, y: -ballDirection.y });
      }
    }

    setBallPosition({
      x: ballPosition.x + ballDirection.x * 5,
      y: ballPosition.y + ballDirection.y * 5,
    });
  }, [ballPosition, ballDirection, paddlePosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateBallPosition();
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [updateBallPosition]);

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const paddleY = event.clientY - rect.top - paddleHeight / 2;

      setPaddlePosition({ ...paddlePosition, y: paddleY });
    }
  };

  return (
    <div className="App">
      <canvas ref={canvasRef} width={800} height={600} onMouseMove={handleMouseMove}></canvas>
    </div>
  );
};

export default App;
