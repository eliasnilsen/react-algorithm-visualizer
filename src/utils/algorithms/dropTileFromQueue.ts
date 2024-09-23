import { TileType } from "../types";

export const dropTileFromQueue = (tile: TileType, queue: TileType[]) => {
  for (let i = 0; i < queue.length; i++) {
    if (tile === queue[i]) {
      queue.splice(i, 1);
      break;
    }
  }
};
