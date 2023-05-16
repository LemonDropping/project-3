import { PLAYER } from "../hooks/usePlayer";
import { STAGE } from "../hooks/useStage";
import { STAGE_WIDTH, STAGE_HEIGHT } from "./setup";
import { TETROMINOES } from "./setup";

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, "clear"]));

export const randomTetrominoe = () => {
  const tetrominoes = [
    "I",
    "J",
    "L",
    "O",
    "S",
    "T",
    "Z"
  ] as (keyof typeof TETROMINOES)[];
  const randTetrominoe =
    tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
  return TETROMINOES[randTetrominoe];
};

export const isColliding = (
  player: PLAYER,
  stage: STAGE,
  { x: moveX, y: moveY }: { x: number; y: number }
) => {
  for (let y = 0; y < player.tetrominoe.length; y += 1) {
    for (let x = 0; x < player.tetrominoe[y].length; x += 1) {
      if (player.tetrominoe[y][x] !== 0) {
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
  return false;
};
