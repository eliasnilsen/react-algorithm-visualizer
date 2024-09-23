import { SpeedType } from "../../speed";
import { GridType, TileType } from "../../types";
import { horizontalDivision } from "./horizontalDivision";
import { verticalDivision } from "./verticalDivision";

type RecursiveDivisionProps = {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  row: number;
  col: number;
  height: number;
  width: number;
  selectedSpeed: SpeedType;
};

export const recursiveDivision = async ({
  grid,
  startTile,
  endTile,
  row,
  col,
  height,
  width,
  selectedSpeed,
}: RecursiveDivisionProps) => {
  if (height <= 1 || width <= 1) {
    return;
  }

  if (height > width) {
    await horizontalDivision({
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      selectedSpeed,
    });
  } else {
    await verticalDivision({
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      selectedSpeed,
    });
  }
};
