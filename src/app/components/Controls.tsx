"use client";
import useHouseStore from "../store/useHouseStore";
import ControlCard from "./ControlCard";

const Controls = () => {
  const houses = useHouseStore((state) => state.houses);
  const addHouse = useHouseStore((state) => state.addHouse);
  const removeHouse = useHouseStore((state) => state.removeHouse);

  return (
    <div className="border-2 rounded-md overflow-hidden">
      <div className="flex justify-center bg-gray-800 p-2 text-white font-semibold">
        Houses List
      </div>
      <div className="bg-gray-700 p-4 space-y-4 flex flex-col">
        {houses.map((house) => (
          <ControlCard
            key={house.id}
            houseId={house.id}
            onRemove={() => removeHouse(house.id)}
          />
        ))}
      </div>
      <div className="flex items-center justify-center bg-gray-800 p-2">
        <button
          type="button"
          onClick={addHouse}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          🏠 Build a new house
        </button>
      </div>
    </div>
  );
};

export default Controls;
