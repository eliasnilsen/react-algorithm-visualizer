export type AlgorithmType = "DIJKSTRA" | "BFS" | "DFS";

export type AlgorithmSelectType = {
  label: string;
  value: AlgorithmType;
};

export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { label: "Dijkstra", value: "DIJKSTRA" },
  { label: "Breadth First Search (BFS)", value: "BFS" },
  { label: "Depth First Search (DFS)", value: "DFS" },
];
