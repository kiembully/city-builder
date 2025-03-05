"use client";
import Slider from "./forms/Slider";
import Select from "./forms/Select";
import useHouseStore from "../store/useHouseStore";

interface ControlCardProps {
  houseId: number;
  onRemove: () => void;
}

const ControlCard: React.FC<ControlCardProps> = ({ houseId, onRemove }) => {
  const house = useHouseStore((state) =>
    state.houses.find((h) => h.id === houseId)
  );
  const updateHouse = useHouseStore((state) => state.updateHouse);

  if (!house) return null; // Prevent errors if house is not found

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="font-semibold">House {houseId}</div>
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
          <Slider
            value={house.floors}
            min={1}
            max={10}
            step={1}
            onChange={(value) => updateHouse(houseId, value, house.color)}
          />
        </div>
        <div className="flex-auto">
          <Select
            value={house.color}
            onChange={(color) => updateHouse(houseId, house.floors, color)}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlCard;
