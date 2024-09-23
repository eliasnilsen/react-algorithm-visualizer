import RunAlgorithmButton from "./ui/RunAlgorithmButton";
import Select from "./ui/Select";
import { MAZE_OPTIONS, MazeType, runMazeAlgorithm } from "../utils/maze";
import {
  DEFAULT_START_TILE as startTile,
  resetGrid,
  DEFAULT_END_TILE as endTile,
} from "../utils/grid";
import {
  AlgorithmType,
  PATHFINDING_ALGORITHMS,
} from "../utils/pathfindingConstants";
import { runPathfindingAlgorithm } from "../utils/algorithms/runPathfindingAlgorithm";
import { animatePath } from "../utils/animatePath";
import ClearGridButton from "./ui/ClearGridButton";
import { calculateAnimationDelay } from "../utils/calculateAnimationDelay";
import { usePathStore } from "../utils/zustand/usePathStore";
import { useSpeedStore } from "../utils/zustand/useSpeedStore";
import { useVisualizationStore } from "../utils/zustand/useVisualizationStore";

const Header = () => {
  const { grid, setGrid, algorithm, setAlgorithm, maze, setMaze } =
    usePathStore();

  const { isVisualizing, setIsVisualizing, isVisualized, setIsVisualized } =
    useVisualizationStore();

  const { speed: selectedSpeed } = useSpeedStore();

  const handleMazeAlgorithm = (maze: MazeType) => {
    if (maze === "NONE") {
      setMaze(maze);
      resetGrid(grid, startTile, endTile);
    } else {
      setMaze(maze);
      resetGrid(grid, startTile, endTile);

      setIsVisualizing(true);

      runMazeAlgorithm({
        maze,
        grid,
        startTile,
        endTile,
        selectedSpeed,
      });

      const newGrid = [...grid];
      setGrid(newGrid);

      setIsVisualizing(false);
    }
  };

  const handlePathfindingAlgorithm = (pathfindingAlgorithm: AlgorithmType) => {
    setAlgorithm(pathfindingAlgorithm);
  };

  const handleRunVisualizer = () => {
    setIsVisualizing(true);

    const { traversedTiles, path } = runPathfindingAlgorithm({
      algorithm,
      grid,
      startTile,
      endTile,
    });

    animatePath({
      traversedTiles,
      path,
      startTile,
      endTile,
      selectedSpeed,
    });

    const animationDelay = calculateAnimationDelay(
      traversedTiles,
      path,
      selectedSpeed
    );

    setTimeout(() => {
      const newGrid = [...grid];
      setGrid(newGrid);

      setIsVisualizing(false);
      setIsVisualized(true);
    }, animationDelay);
  };

  return (
    <div className="flex w-[1416.8px] gap-2 m-auto items-end pb-4 h-24">
      <Select
        label="Maze Algorithms"
        options={MAZE_OPTIONS}
        isDisabled={isVisualizing || isVisualized}
        handleGeneration={() => handleMazeAlgorithm(maze)}
      />
      <Select
        label="Pathfinding Algorithms"
        options={PATHFINDING_ALGORITHMS}
        isDisabled={isVisualizing || isVisualized}
        handleGeneration={() => handlePathfindingAlgorithm}
      />
      <RunAlgorithmButton
        handleRunVisualizer={handleRunVisualizer}
        isVisualizing={isVisualizing}
        isVisualized={isVisualized}
      />
      <ClearGridButton
        isDisabled={isVisualizing}
        setIsVisualized={setIsVisualized}
      />
    </div>
  );
};

export default Header;
