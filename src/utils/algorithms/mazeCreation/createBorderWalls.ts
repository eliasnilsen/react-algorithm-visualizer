import { gridCols, gridRows } from "../../grid";
import { GridType, TileType } from "../../types";

type CreateBorderWallsProps = {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
};

export const createBorderWalls = async ({
  grid,
  startTile,
  endTile,
}: CreateBorderWallsProps) => {
  const shape = [
    //right
    {
      row: 0,
      col: 1,
    },
    //down
    { row: 1, col: 0 },
    //left
    { row: 0, col: -1 },
    //up
    { row: -1, col: 0 },
  ];

  let row = 0;
  let col = 0;

  for (let i = 0; i < 4; i++) {
    const direction = shape[i];

    while (
      row + direction.row >= 0 &&
      row + direction.row < gridRows &&
      col + direction.col >= 0 &&
      col + direction.col < gridCols
    ) {
      row += direction.row;
      col += direction.col;

      if (
        !(
          col === startTile.col &&
          row === startTile.row &&
          col === endTile.col &&
          row === endTile.row
        )
      ) {
        grid[row][col].isWall = true;
        document.getElementById(`${row}-${col}`)!.className =
          "baseTile wallTileProperties animate-createWall";
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }

    if (row < 0) row = 0;
    if (row >= gridRows) row = gridRows - 1;
    if (col < 0) col = 0;
    if (col >= gridCols) col = gridCols - 1;
  }
};
