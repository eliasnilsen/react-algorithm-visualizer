import { gridCols, gridRows } from "../grid";
import { GridType, TileType } from "../types";

export const getUntraversedAdjacentTiles = (grid: GridType, tile: TileType) => {
  const { row, col } = tile;
  const adjacentTiles = [];

  if (row > 0) {
    adjacentTiles.push(grid[row - 1][col]);
  }
  if (row < gridRows - 1) {
    adjacentTiles.push(grid[row + 1][col]);
  }
  if (col > 0) {
    adjacentTiles.push(grid[row][col - 1]);
  }
  if (col < gridCols - 1) {
    adjacentTiles.push(grid[row][col + 1]);
  }
  return adjacentTiles.filter((tile) => !tile.isTraversed);
};
