import { create } from "zustand";
import { AlgorithmType } from "../pathfindingConstants";
import { MazeType } from "../maze";
import { GridType } from "../types";
import { createGrid, DEFAULT_END_TILE, DEFAULT_START_TILE } from "../grid";

interface PathStore {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
}

export const usePathStore = create<PathStore>((set) => ({
  algorithm: "BFS",
  setAlgorithm: (algorithm: AlgorithmType) => set({ algorithm }),

  maze: "NONE",
  setMaze: (maze: MazeType) => set({ maze }),

  grid: createGrid(DEFAULT_START_TILE, DEFAULT_END_TILE),
  setGrid: (grid: GridType) => set({ grid }),
}));
