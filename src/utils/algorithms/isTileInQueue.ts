import { TileType } from "../types";

export const isTileInQueue = (tile: TileType, tileQueue: TileType[]) => {
  for (let i = 0; i < tileQueue.length; i++) {
    if (tile === tileQueue[i]) return true;
  }
  return false;
};
