import { createContext, useState } from "react";
import { GridType } from "../utils/types";
import {
  createGrid,
  DEFAULT_START_TILE,
  DEFAULT_END_TILE,
} from "../utils/grid";
import { MazeType } from "../utils/maze";
import { AlgorithmType } from "../utils/pathfindingConstants";

interface PathContextInterface {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
}

export const PathContext = createContext<PathContextInterface | undefined>(
  undefined
);

export const PathContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(
    createGrid(DEFAULT_START_TILE, DEFAULT_END_TILE)
  );

  return (
    <PathContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
      }}
    >
      {children}
    </PathContext.Provider>
  );
};
