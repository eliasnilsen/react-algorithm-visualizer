import { TileType } from "../types";

export const checkStack = (tile: TileType, stack: TileType[]) => {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === tile) return true;
  }
  return false;
};
