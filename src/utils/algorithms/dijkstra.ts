import { GridType, TileType } from "../types";
import { dropTileFromQueue } from "./dropTileFromQueue";
import { getUntraversedAdjacentTiles } from "./getUntraversedAdjacentTiles";

type Props = {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
};

export const dijkstra = ({ grid, startTile, endTile }: Props) => {
  const traversedTiles = [];
  const baseTile = grid[startTile.row][startTile.col];
  baseTile.distance = 0;
  baseTile.isTraversed = true;
  const unTraversedTiles = [baseTile];

  console.log("Starting DIJKSTRA");

  while (unTraversedTiles.length > 0) {
    unTraversedTiles.sort((a, b) => a.distance - b.distance);
    const tile = unTraversedTiles.shift();
    if (tile) {
      if (tile.isWall) {
        console.log(`Tile (${tile.row}-${tile.col}) is a wall, skipping.`);
        continue;
      }

      if (tile.distance === Infinity) {
        console.log(
          `Tile (${tile.row}-${tile.col}) has infinite distance, breaking.`
        );
        break;
      }

      tile.isTraversed = true;
      traversedTiles.push(tile);

      if (tile.row === endTile.row && tile.col === endTile.col) {
        console.log("Reached end tile!");
        break;
      }

      const adjacentTiles = getUntraversedAdjacentTiles(grid, tile);
      for (let i = 0; i < adjacentTiles.length; i++) {
        const adjacentTile = adjacentTiles[i];
        if (tile.distance + 1 < adjacentTile.distance) {
          dropTileFromQueue(adjacentTile, unTraversedTiles);
          adjacentTile.distance = tile.distance + 1;
          adjacentTile.parent = tile;
          unTraversedTiles.push(adjacentTile);
        }
      }
    }
  }

  const path = [];
  let tile = grid[endTile.row][endTile.col];

  while (tile !== null) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent!;
  }

  if (path.length === 0) {
    console.error("No path found from startTile to endTile.");
  }

  return { traversedTiles, path };
};
