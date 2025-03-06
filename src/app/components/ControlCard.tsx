"use client";
import { memo } from "react";
import Slider from "./forms/Slider";
import Select from "./forms/Select";

interface ControlCardProps {
  id: number;
  floors: number;
  color: string;
  onUpdate: (floors: number, color: string) => void;
  onRemove: () => void;
}

const ControlCard = ({
  id,
  floors,
  color,
  onUpdate,
  onRemove,
}: ControlCardProps) => {
  console.log(`Rendering ControlCard ${id}`);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="font-semibold">House {id}</div>
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
            onChange={(value) => onUpdate(value, color)}
          />
        </div>
        <div className="flex-auto">
          <Select
            value={color}
            onChange={(newColor) => onUpdate(floors, newColor)}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ControlCard);
