import { binaryTree } from "./algorithms/mazeCreation/binaryTree";
import { createBorderWalls } from "./algorithms/mazeCreation/createBorderWalls";
import { recursiveDivision } from "./algorithms/mazeCreation/recursiveDivision";
import { gridCols, gridRows } from "./grid";
import { SpeedType } from "./speed";
import { GridType, TileType } from "./types";

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export type MazeSelectType = {
  label: string;
  value: MazeType;
};

export const MAZE_OPTIONS: MazeSelectType[] = [
  { label: "None", value: "NONE" },
  { label: "Binary Tree", value: "BINARY_TREE" },
  { label: "Recursive Division", value: "RECURSIVE_DIVISION" },
];

type RunMazeAlgorithmProps = {
  maze: MazeType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  selectedSpeed: SpeedType;
};
export const runMazeAlgorithm = async ({
  maze,
  grid,
  startTile,
  endTile,
  selectedSpeed,
}: RunMazeAlgorithmProps) => {
  if (maze === "BINARY_TREE") {
    binaryTree({
      grid,
      startTile,
      endTile,
      selectedSpeed,
    });
  }
  if (maze === "RECURSIVE_DIVISION") {
    await createBorderWalls({ grid, startTile, endTile });
    await recursiveDivision({
      grid,
      startTile,
      endTile,
      row: 1,
      col: 1,
      height: Math.floor((gridRows - 1) / 2),
      width: Math.floor((gridCols - 1) / 2),
      selectedSpeed,
    });
    setTimeout(() => {}, 800 * selectedSpeed);
  }
};
