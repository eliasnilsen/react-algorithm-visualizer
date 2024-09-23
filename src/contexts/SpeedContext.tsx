import { createContext, useState } from "react";
import { SpeedType } from "../utils/speed";

interface SpeedContextInterface {
  speed: SpeedType;
  setSpeed: (speed: SpeedType) => void;
}

export const SpeedContext = createContext<SpeedContextInterface | undefined>(
  undefined
);

export const SpeedContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [speed, setSpeed] = useState<SpeedType>(4);

  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};
