import { gridCols, gridRows } from "../../grid";
import { SpeedType } from "../../speed";
import { GridType, TileType } from "../../types";
import { createWalls } from "./createWalls";
import { eraseWall } from "./eraseWall";

type BinaryTreeProps = {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  selectedSpeed: SpeedType;
};

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const binaryTree = async ({
  grid,
  startTile,
  endTile,
  selectedSpeed,
}: BinaryTreeProps) => {
  createWalls({ startTile, endTile, selectedSpeed });
  await new Promise((resolve) => setTimeout(resolve, 2000));

  for (const row of grid) {
    for (const tile of row) {
      if (tile.row % 2 === 0 || tile.col % 2 === 0) {
        if (
          !(
            tile.col === startTile.col &&
            tile.row === startTile.row &&
            tile.col === endTile.col &&
            tile.row === endTile.row
          )
        ) {
          tile.isWall = true;
        }
      }
    }
  }

  for (let row = 1; row < gridRows; row += 2) {
    for (let col = 1; col < gridCols; col += 2) {
      if (row === gridRows - 2 && col === gridCols - 2) {
        continue;
      } else if (row === gridRows - 2) {
        await eraseWall({ grid, row, col, isRight: 1, selectedSpeed });
      } else if (col === gridCols - 2) {
        await eraseWall({ grid, row, col, isRight: 0, selectedSpeed });
      } else {
        await eraseWall({
          grid,
          row,
          col,
          isRight: randomInt(0, 2),
          selectedSpeed,
        });
      }
    }
  }
};
