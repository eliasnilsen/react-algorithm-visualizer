import { GridType, TileType } from "./types";

export const gridRows = 29;
export const gridCols = 59;

export const DEFAULT_START_TILE = {
  row: 1,
  col: 1,
  isStart: true,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isTraversed: false,
  parent: null,
};

export const DEFAULT_END_TILE = {
  row: gridRows - 2,
  col: gridCols - 2,
  isStart: false,
  isEnd: true,
  isWall: false,
  isPath: false,
  distance: Infinity,
  isTraversed: false,
  parent: null,
};

//creates the rows for the grid
//creates a new tile for each col, and stores the group of tiles as a row
const createRow = (row: number, startTile: TileType, endTile: TileType) => {
  const currentRow = [];
  for (let col = 0; col < gridCols; col++) {
    const isStartTile = row === startTile.row && col === startTile.col;
    currentRow.push({
      row,
      col,
      isStart: row === startTile.row && col === startTile.col,
      isEnd: row === endTile.row && col === endTile.col,
      isWall: false,
      isPath: false,
      distance: isStartTile ? 0 : Infinity,
      isTraversed: false,
      parent: null,
    });
  }
  return currentRow;
};

//creates the grid by initializing the createRow function
//creates a new row until the condition of number of rows is met
//returns the composition of rows and cols, which is the completed grid
export const createGrid = (startTile: TileType, endTile: TileType) => {
  const grid: GridType = [];
  for (let row = 0; row < gridRows; row++) {
    grid.push(createRow(row, startTile, endTile));
  }
  return grid;
};

export const resetGrid = (
  grid: GridType,
  startTile: TileType,
  endTile: TileType
) => {
  for (let row = 0; row < gridRows; row++) {
    for (let col = 0; col < gridCols; col++) {
      const tile = grid[row][col];
      tile.isPath = false;
      tile.isWall = false;
      tile.distance = Infinity;
      tile.isTraversed = false;
      tile.parent = null;

      if (row === startTile.row && col === startTile.col) {
        tile.isStart = true;
        tile.distance = 0;
      } else if (row === endTile.row && col === endTile.col) {
        tile.isEnd = true;
      } else {
        tile.isStart = false;
        tile.isEnd = false;
      }

      document.getElementById(`${tile.row}-${tile.col}`)!.className =
        "baseTile";
    }
  }
};
