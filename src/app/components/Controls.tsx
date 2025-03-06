"use client";
import { memo, useCallback } from "react";
import useHouseStore from "../store/useHouseStore";
import ControlCard from "./ControlCard";

const Controls = () => {
  const houses = useHouseStore((state) => state.houses);
  const addHouse = useHouseStore((state) => state.addHouse);
  const removeHouse = useHouseStore((state) => state.removeHouse);
  const updateHouse = useHouseStore((state) => state.updateHouse);

  const getUpdateHandler = useCallback(
    (id: number) => (floors: number, color: string) =>
      updateHouse(id, floors, color),
    [updateHouse]
  );

  const getRemoveHandler = useCallback(
    (id: number) => () => removeHouse(id),
    [removeHouse]
  );

  return (
    <div className="border-2 rounded-md overflow-hidden">
      <div className="flex justify-center bg-gray-800 p-2 text-white font-semibold">
        Houses List
      </div>
      <div className="bg-gray-700 p-4 space-y-4 flex flex-col">
        {houses.map((house) => (
          <MemoizedControlCard
            key={house.id}
            house={house}
            onUpdate={getUpdateHandler(house.id)}
            onRemove={getRemoveHandler(house.id)}
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

const MemoizedControlCard = memo(ControlCard, (prevProps, nextProps) => {
  return (
    prevProps.house.floors === nextProps.house.floors &&
    prevProps.house.color === nextProps.house.color
  );
});

export default Controls;
