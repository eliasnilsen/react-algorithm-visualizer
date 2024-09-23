import { cn } from "../utils/cn";
import { useState } from "react";
import Tile from "./Tile";
import { GridType, TileType } from "../utils/types";
import { usePathStore } from "../utils/zustand/usePathStore";

const Grid = () => {
  const { grid, setGrid } = usePathStore();

  const [isMousePressedDown, setIsMousePressedDown] = useState(false);

  const isStartOrEndTile = (row: number, col: number) => {
    return grid[row][col].isStart || grid[row][col].isEnd;
  };

  const handleMouseDown = (row: number, col: number) => {
    if (isStartOrEndTile(row, col)) return;

    setIsMousePressedDown(true);
    const newGrid = handleWallTileChange(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = (row: number, col: number) => {
    if (isStartOrEndTile(row, col)) return;

    setIsMousePressedDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isStartOrEndTile(row, col)) return;

    if (isMousePressedDown) {
      const newGrid = handleWallTileChange(grid, row, col);
      setGrid(newGrid);
    }
  };

  const handleWallTileChange = (grid: GridType, row: number, col: number) => {
    const newGrid = [...grid];

    const newWallTile = {
      ...newGrid[row][col],
      isWall: !newGrid[row][col].isWall,
    };

    setTimeout(() => {
      newWallTile.isWall
        ? (document.getElementById(`${row}-${col}`)!.className =
            "baseTile wallTileProperties animate-createWall")
        : (document.getElementById(`${row}-${col}`)!.className = "baseTile");
    }, 10);

    newGrid[row][col] = newWallTile;
    return newGrid;
  };

  return (
    <div className={cn("flex flex-col items-center justify-center w-full")}>
      <div className="border-b border-l border-uranianBlue bg-white shadow-md">
        {grid.map((row: TileType[], rowIndex: number) => (
          <div key={rowIndex} className="flex">
            {row.map((tile: TileType, tileIndex: number) => {
              const { isStart, isEnd, isPath, isWall, isTraversed, row, col } =
                tile;
              return (
                <Tile
                  key={tileIndex}
                  row={row}
                  col={col}
                  isStart={isStart}
                  isEnd={isEnd}
                  isPath={isPath}
                  isWall={isWall}
                  isTraversed={isTraversed}
                  handleMouseDown={() => handleMouseDown(row, col)}
                  handleMouseUp={() => handleMouseUp(row, col)}
                  handleMouseEnter={() => handleMouseEnter(row, col)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
