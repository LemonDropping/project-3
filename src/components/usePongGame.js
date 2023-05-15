import { useState, useEffect } from 'react';

const usePongGame = () => {
  const [paddleA, setPaddleA] = useState({ y: 190 });
  const [paddleB, setPaddleB] = useState({ y: 190 });
  const [ball, setBall] = useState({ x: 295, y: 195, dx: 2, dy: 2 });

  const movePaddleA = (y) => {
    setPaddleA({ y: Math.min(Math.max(y, 0), 340) });
  };

  // Add a simple AI for paddleB
  const movePaddleB = (ballY) => {
    const targetY = ballY - 30; // Move paddleB to the center of the ball
    setPaddleB({ y: Math.min(Math.max(targetY, 0), 340) });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBall((prevBall) => {
        const { x, y, dx, dy } = prevBall;

        let newDx = dx;
        let newDy = dy;

        if (y <= 0 || y >= 390) {
          newDy = -dy;
        }

        if (
          (x <= 20 && y >= paddleA.y - 10 && y <= paddleA.y + 70) ||
          (x >= 570 && y >= paddleB.y - 10 && y <= paddleB.y + 70)
        ) {
          newDx = -dx;
        }

        // Move paddleB (AI) as the ball moves
        movePaddleB(y);

        return { x: x + newDx, y: y + newDy, dx: newDx, dy: newDy };
      });
    }, 20);

    return () => clearInterval(interval);
  }, [paddleA.y, paddleB.y]);

  return { paddleA, paddleB, ball, movePaddleA };
};

export default usePongGame;
