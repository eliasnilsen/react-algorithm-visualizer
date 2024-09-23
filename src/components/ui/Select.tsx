import { useState } from "react";
import { MazeSelectType, MazeType } from "../../utils/maze";
import {
  AlgorithmSelectType,
  AlgorithmType,
} from "../../utils/pathfindingConstants";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

type SelectProps = {
  label: string;
  options: MazeSelectType[] | AlgorithmSelectType[];
  isDisabled: boolean;
  handleGeneration: (value: MazeType | AlgorithmType) => void;
};

const Select = ({
  label,
  options,
  isDisabled,
  handleGeneration,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select algorithm");

  const handleOpen = () => {
    if (isDisabled) return;
    setIsOpen(!isOpen);
  };

  const handleChangeValue = (option: MazeSelectType | AlgorithmSelectType) => {
    if (isDisabled) return;
    setSelectedValue(option.label);
    setIsOpen(false);
    handleGeneration(option.value);
  };

  return (
    <div className="relative flex flex-col items-start gap-1 text-darkPurple text-sm font-medium select-none">
      <label className="font-semibold" htmlFor={label}>
        {label}
      </label>
      <div
        id={label}
        onClick={handleOpen}
        className={`flex justify-between items-center cursor-pointer transition ease-in-out bg-white border border-[#D6D6D6] w-[200px] p-2 ${
          isDisabled && "opacity-50 hover:cursor-not-allowed"
        }`}
      >
        {selectedValue}
        {!isOpen ? <LiaAngleDownSolid /> : <LiaAngleUpSolid />}
      </div>
      {isOpen && (
        <ul className="absolute top-[61px] shadow-md z-50 min-h-fit max-h-[200px] w-[200px] overflow-y-auto bg-white border border-[#D6D6D6]">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleChangeValue(option)}
              className="cursor-pointer p-2 hover:bg-cherryBlossomPink border-b last:border-none border-[#D6D6D6]"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
