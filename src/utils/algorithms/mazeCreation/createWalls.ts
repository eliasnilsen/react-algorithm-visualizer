import { gridCols, gridRows } from "../../grid";
import { SPEEDS, SpeedType } from "../../speed";
import { TileType } from "../../types";

type CreateWallsProps = {
  startTile: TileType;
  endTile: TileType;
  selectedSpeed: SpeedType;
};

export const createWalls = ({
  startTile,
  endTile,
  selectedSpeed,
}: CreateWallsProps) => {
  const delay =
    6 * SPEEDS.find((speed) => speed.value === selectedSpeed)!.value - 1;

  for (let row = 0; row < gridRows; row++) {
    setTimeout(() => {
      for (let col = 0; col < gridCols; col++) {
        if (row % 2 === 0 || col % 2 === 0) {
          if (
            !(
              col === startTile.col &&
              row === startTile.row &&
              col === endTile.col &&
              row === endTile.row
            )
          ) {
            setTimeout(() => {
              document.getElementById(`${row}-${col}`)!.className =
                "baseTile wallTileProperties animate-createWall";
            }, delay * col);
          }
        }
      }
    }, delay * (gridRows / 2) * row);
  }
};
