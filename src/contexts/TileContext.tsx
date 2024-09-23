import { createContext, useState } from "react";
import { TileType } from "../utils/types";
import { DEFAULT_END_TILE, DEFAULT_START_TILE } from "../utils/grid";

interface TileContextInterface {
  startTile: TileType;
  setStartTile: (startTile: TileType) => void;
  endTile: TileType;
  setEndTile: (endTile: TileType) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(
  undefined
);

export const TileContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [startTile, setStartTile] = useState<TileType>(DEFAULT_START_TILE);
  const [endTile, setEndTile] = useState<TileType>(DEFAULT_END_TILE);

  return (
    <TileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
      }}
    >
      {children}
    </TileContext.Provider>
  );
};
