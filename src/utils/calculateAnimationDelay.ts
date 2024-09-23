import { TileType } from "./types";

//function to calculate animation time based on algorithm and the tiles traversed, path length and selected speed.
export const calculateAnimationDelay = (
  traversedTiles: TileType[],
  path: TileType[],
  selectedSpeed: number
) => {
  const traversedTime = traversedTiles.length * selectedSpeed;
  const pathTime = path.length * selectedSpeed;

  const totalTime = traversedTime + pathTime;
  return totalTime;
};
