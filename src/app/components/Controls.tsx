"use client";
import { useCallback } from "react";
import useHouseStore from "../store/useHouseStore";
import ControlCard from "./ControlCard";

const Controls = () => {
  const houses = useHouseStore((state) => state.houses);
  const addHouse = useHouseStore((state) => state.addHouse);
  const removeHouse = useHouseStore((state) => state.removeHouse);
  const updateHouse = useHouseStore((state) => state.updateHouse);

  // Memoized function to handle updates
  const handleUpdate = useCallback(
    (id: number, floors: number, color: string) => {
      updateHouse(id, floors, color);
    },
    [updateHouse]
  );

  // Memoized function to handle house removal
  const handleRemove = useCallback(
    (id: number) => {
      removeHouse(id);
    },
    [removeHouse]
  );

  return (
    <div className="border-2 rounded-md overflow-hidden">
      <div className="flex justify-center bg-gray-800 p-2 text-white font-semibold">
        Houses List
      </div>
      <div className="bg-gray-700 p-4 space-y-4 flex flex-col">
        {houses.map((house) => (
          <ControlCard
            key={house.id}
            id={house.id}
            floors={house.floors}
            color={house.color}
            onUpdate={(floors, color) => handleUpdate(house.id, floors, color)}
            onRemove={() => handleRemove(house.id)}
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
