import {
  DEFAULT_START_TILE as startTile,
  resetGrid,
  DEFAULT_END_TILE as endTile,
} from "../../utils/grid";
import { usePathStore } from "../../utils/zustand/usePathStore";

type Props = {
  isDisabled: boolean;
  setIsVisualized: (bool: boolean) => void;
};
const ClearGridButton = ({ isDisabled, setIsVisualized }: Props) => {
  const { grid } = usePathStore();

  const handleClearGrid = () => {
    resetGrid(grid, startTile, endTile);
    setIsVisualized(false);
  };

  return (
    <button
      onClick={handleClearGrid}
      disabled={isDisabled}
      className="flex items-center justify-center px-3 py-2 text-palatinateBlue text-sm font-semibold hover:underline transition ease-in-out disabled:hover:cursor-not-allowed disabled:opacity-50"
    >
      Clear board
    </button>
  );
};

export default ClearGridButton;
