import { memo } from "react";
import Select from "./forms/Select";

interface ControlCardProps {
  house: {
    id: number;
    floors: number;
    color: string;
  };
  onUpdate: (floors: number, color: string) => void;
  onRemove: () => void;
}

const ControlCard: React.FC<ControlCardProps> = ({
  house,
  onUpdate,
  onRemove,
}) => {
  console.log(`Rendering ControlCard ${house.id}`);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="font-semibold">House {house.id}</div>
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
          <div>Floors: {house.floors}</div>
          <input
            type="range"
            min="1"
            max="10"
            value={house.floors}
            onChange={(e) => onUpdate(Number(e.target.value), house.color)}
          />
        </div>
        <div className="flex-auto">
          <Select
            value={house.color}
            onChange={(selectedValue) => onUpdate(house.floors, selectedValue)}
          />
        </div>
      </div>
    </div>
  );
};

// ✅ Memoized ControlCard prevents unnecessary re-renders
export default memo(ControlCard);
