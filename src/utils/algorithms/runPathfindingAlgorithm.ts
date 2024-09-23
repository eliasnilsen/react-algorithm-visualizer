import { AlgorithmType } from "../pathfindingConstants";
import { GridType, TileType } from "../types";
import { bfs } from "./bfs";
import { dfs } from "./dfs";
import { dijkstra } from "./dijkstra";

type Props = {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
};

export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: Props) => {
  switch (algorithm) {
    case "BFS":
      return bfs({ grid, startTile, endTile });
    case "DFS":
      return dfs({ grid, startTile, endTile });
    case "DIJKSTRA":
      return dijkstra({ grid, startTile, endTile });
    default:
      return bfs({ grid, startTile, endTile });
  }
};
