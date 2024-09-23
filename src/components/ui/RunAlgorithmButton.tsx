type Props = {
  handleRunVisualizer: React.MouseEventHandler<HTMLButtonElement>;
  isVisualizing: boolean;
  isVisualized: boolean;
};

const RunAlgorithmButton = ({
  handleRunVisualizer,
  isVisualizing,
  isVisualized,
}: Props) => {
  return (
    <button
      onClick={handleRunVisualizer}
      disabled={isVisualizing || isVisualized}
      className="flex items-center justify-center px-3 py-2 text-white text-sm font-semibold border border-palatinateBlue bg-palatinateBlue hover:border-[#1B29C5] hover:bg-[#1B29C5] transition ease-in-out disabled:hover:bg-palatinateBlue disabled:hover:cursor-not-allowed disabled:opacity-50"
    >
      {(isVisualizing && "Running Algorithm") ||
        (isVisualized && "Algorithm Finished") ||
        "Run Algorithm"}
    </button>
  );
};

export default RunAlgorithmButton;
