import React, { useRef, useEffect } from 'react';
import styles from './Pong.module.css';

const Pong = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game variables
    const paddleHeight = 100;
    const paddleWidth = 10;
    const ballRadius = 5;
    let player1 = { x: 10, y: canvas.height / 2 - paddleHeight / 2, dy: 0 };
    let player2 = { x: canvas.width - 20, y: canvas.height / 2 - paddleHeight / 2, dy: 0 };
    let ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 2, dy: 2 };

    // Helper functions
    const drawPaddle = (paddle) => {
      ctx.beginPath();
      ctx.rect(paddle.x, paddle.y, paddleWidth, paddleHeight);
      ctx.fillStyle = '#FFF';
      ctx.fill();
      ctx.closePath();
    };

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFF';
      ctx.fill();
      ctx.closePath();
    };

    const moveBall = () => {
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Bounce off the top and bottom walls
      if (ball.y - ballRadius <= 0 || ball.y + ballRadius >= canvas.height) {
        ball.dy = -ball.dy;
      }

      // Reset the ball when it goes out of bounds
      if (ball.x - ballRadius <= 0 || ball.x + ballRadius >= canvas.width) {
        ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 2, dy: 2 };
      }
    };

    const update = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw paddles and ball
      drawPaddle(player1);
      drawPaddle(player2);
      drawBall();

      // Move the ball
      moveBall();

      requestAnimationFrame(update);
    };

    update();
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className={styles.canvasContainer}
      />
    </div>
  );
};

export default Pong;
