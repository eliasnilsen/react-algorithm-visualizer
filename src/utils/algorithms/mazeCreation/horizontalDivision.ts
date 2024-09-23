import { getRandInt } from "../../helperFunctions";
import { SpeedType } from "../../speed";
import { GridType, TileType } from "../../types";
import { recursiveDivision } from "./recursiveDivision";

type HorizontalDivisionProps = {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  row: number;
  col: number;
  height: number;
  width: number;
  selectedSpeed: SpeedType;
};

export const horizontalDivision = async ({
  grid,
  startTile,
  endTile,
  row,
  col,
  height,
  width,
  selectedSpeed,
}: HorizontalDivisionProps) => {
  const createWall = row + getRandInt(0, height - 1) * 2 + 1;
  const createPassage = col + getRandInt(0, width) * 2;

  for (let i = 0; i < 2 * width - 1; i++) {
    if (createPassage !== col + i) {
      if (
        !(
          grid[createWall][col + i] === startTile &&
          grid[createWall][col + i] === startTile &&
          grid[createWall][col + i] === endTile &&
          grid[createWall][col + i] === endTile
        )
      ) {
        grid[createWall][col + i].isWall = true;
        document.getElementById(`${createWall}-${col + i}`)!.className =
          "baseTile wallTileProperties animate-createWall";
        await new Promise((resolve) => setTimeout(resolve, 20));
      }
    }
  }

  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height: (createWall - row + 1) / 2,
    width,
    selectedSpeed,
  });

  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row: createWall + 1,
    col,
    height: height - (createWall - row + 1) / 2,
    width,
    selectedSpeed,
  });
};
