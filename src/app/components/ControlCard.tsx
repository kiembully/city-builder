"use client";
import { useState } from "react";
import Slider from "./forms/Slider";
import Select from "./forms/Select";

interface ControlCardProps {
  onRemove: () => void;
}

const ControlCard: React.FC<ControlCardProps> = ({ onRemove }) => {
  const [floors, setFloors] = useState(4);
  const [color, setColor] = useState("orange-500");

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="font-semibold">House</div>
        <button
          type="button"
          onClick={onRemove}
          className="text-red-500 hover:text-red-700"
        >
          ❌
        </button>
      </div>
      <div className="flex w-full space-x-2 mt-2">
        <div className="flex-auto">
          <div>Floors: {floors}</div>
          <Slider
            value={floors}
            min={1}
            max={10}
            step={1}
            onChange={setFloors}
          />
        </div>
        <div className="flex-auto">
          <Select value={color} onChange={setColor} />
        </div>
      </div>
    </div>
  );
};

export default ControlCard;
