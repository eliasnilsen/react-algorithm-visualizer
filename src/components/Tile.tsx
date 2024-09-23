import { LiaFlagCheckeredSolid, LiaHorseHeadSolid } from "react-icons/lia";
import { cn } from "../utils/cn";

type Props = {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  isTraversed: boolean;
  handleMouseDown: (row: number, col: number) => void;
  handleMouseUp: (row: number, col: number) => void;
  handleMouseEnter: (row: number, col: number) => void;
};

const Tile = ({
  row,
  col,
  isStart,
  isEnd,
  isWall,
  isPath,
  isTraversed,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: Props) => {
  return (
    <div
      id={`${row}-${col}`}
      className={cn(
        "baseTile",
        isStart && "flex items-center justify-center",
        isEnd && "flex items-center justify-center",
        isWall && "wallTileProperties",
        isPath && "pathTile",
        isTraversed && "traversedTile"
      )}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
    >
      {isEnd && <LiaFlagCheckeredSolid size={35} />}
      {isStart && <LiaHorseHeadSolid size={35} />}
    </div>
  );
};

export default Tile;
