import { getRandInt } from "../../helperFunctions";
import { SpeedType } from "../../speed";
import { GridType, TileType } from "../../types";
import { recursiveDivision } from "./recursiveDivision";

type VerticalDivisionProps = {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  row: number;
  col: number;
  height: number;
  width: number;
  selectedSpeed: SpeedType;
};

export const verticalDivision = async ({
  grid,
  startTile,
  endTile,
  row,
  col,
  height,
  width,
  selectedSpeed,
}: VerticalDivisionProps) => {
  const createWall = col + getRandInt(0, height - 1) * 2 + 1;
  const createPassage = row + getRandInt(0, height) * 2;

  for (let i = 0; i < 2 * height - 1; i++) {
    if (createPassage !== row + i) {
      if (
        !(
          grid[row + i][createWall] === startTile &&
          grid[row + i][createWall] === startTile &&
          grid[row + i][createWall] === endTile &&
          grid[row + i][createWall] === endTile
        )
      ) {
        grid[row + i][createWall].isWall = true;
        document.getElementById(`${row + i}-${createWall}`)!.className =
          "baseTile wallTileProperties transition-all animate-createWall";
        await new Promise((resolve) => setTimeout(resolve, 20));
      }
    }
  }

  recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width: (createWall - col + 1) / 2,
    selectedSpeed,
  });

  recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col: createWall + 1,
    height,
    width: width - (createWall - col + 1) / 2,
    selectedSpeed,
  });
};
