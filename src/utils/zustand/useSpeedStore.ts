import { create } from "zustand";
import { SpeedType } from "../speed";

interface SpeedStore {
  speed: SpeedType;
  setSpeed: (speed: SpeedType) => void;
}

export const useSpeedStore = create<SpeedStore>((set) => ({
  speed: 4,
  setSpeed: (speed: SpeedType) => set({ speed }),
}));
