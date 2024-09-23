import { SPEEDS, SpeedType } from "../../speed";
import { GridType } from "../../types";

type eraseWallProps = {
  grid: GridType;
  row: number;
  col: number;
  isRight: number;
  selectedSpeed: SpeedType;
};

export const eraseWall = async ({
  grid,
  row,
  col,
  isRight,
  selectedSpeed,
}: eraseWallProps) => {
  if (isRight && grid[row][col + 1]) {
    grid[row][col + 1].isWall = false;
    document.getElementById(`${row}-${col + 1}`)!.className = "baseTile";
    await new Promise((resolve) => setTimeout(resolve, 20));
  } else if (grid[row + 1]) {
    grid[row + 1][col].isWall = false;
    document.getElementById(`${row + 1}-${col}`)!.className = "baseTile";
    await new Promise((resolve) => setTimeout(resolve, 20));
  } else {
    grid[row][col].isWall = false;
    document.getElementById(`${row}-${col}`)!.className = "baseTile";
    await new Promise((resolve) => setTimeout(resolve, 20));
  }
};
