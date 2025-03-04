"use client";
import { useState } from "react";
import ControlCard from "./ControlCard";

const Controls = () => {
  const [houses, setHouses] = useState([{ id: 1 }]); 
  const addHouse = () => {
    setHouses([...houses, { id: Date.now() }]);
  };
  const removeHouse = (id: number) => {
    setHouses(houses.filter((house) => house.id !== id));
  };

  return (
    <div className="border-2 rounded-md overflow-hidden">
      <div className="flex justify-center bg-gray-800 p-2 text-white font-semibold">
        Houses List
      </div>
      <div className="bg-gray-700 p-4 space-y-4 flex flex-col">
        {houses.map((house) => (
          <ControlCard key={house.id} onRemove={() => removeHouse(house.id)} />
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
