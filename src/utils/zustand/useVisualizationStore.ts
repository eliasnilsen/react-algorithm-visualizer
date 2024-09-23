import { create } from "zustand";

interface VisualizationStore {
  isVisualizing: boolean;
  setIsVisualizing: (bool: boolean) => void;
  isVisualized: boolean;
  setIsVisualized: (bool: boolean) => void;
}

export const useVisualizationStore = create<VisualizationStore>((set) => ({
  isVisualizing: false,
  setIsVisualizing: (val: boolean) => set({ isVisualizing: val }),
  isVisualized: false,
  setIsVisualized: (val: boolean) => set({ isVisualized: val }),
}));
