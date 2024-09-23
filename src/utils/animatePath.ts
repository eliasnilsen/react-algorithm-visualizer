import { SpeedType } from "./speed";
import { TileType } from "./types";

type Props = {
  traversedTiles: TileType[];
  path: TileType[];
  startTile: TileType;
  endTile: TileType;
  selectedSpeed: SpeedType;
};

export const animatePath = ({
  traversedTiles,
  path,
  startTile,
  endTile,
  selectedSpeed,
}: Props) => {
  // tile traversing animation
  for (let i = 0; i < traversedTiles.length; i++) {
    setTimeout(() => {
      const tile = traversedTiles[i];
      if (!(tile === startTile && tile === endTile)) {
        document.getElementById(
          `${tile.row}-${tile.col}`
        )!.className = `traversedTile animate-traverseTile`;
      }
    }, selectedSpeed * i);
  }

  // delay before starting the path animation
  const pathAnimationDelay = selectedSpeed * traversedTiles.length;

  // path animation
  setTimeout(() => {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const tile = path[i];
        if (!(tile === startTile && tile === endTile)) {
          document.getElementById(
            `${tile.row}-${tile.col}`
          )!.className = `pathTile animate-pathTile`;
        }
      }, selectedSpeed * i);
    }
  }, pathAnimationDelay);
};
