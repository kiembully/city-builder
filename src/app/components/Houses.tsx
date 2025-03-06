"use client";
import useHouseStore from "../store/useHouseStore";
import HouseCard from "./HouseCard";

const Houses = () => {
  const houses = useHouseStore((state) => state.houses);

  return (
    <div className="flex space-x-2 items-end">
      {houses.map((house) => (
        <HouseCard
          key={house.id}
          id={house.id}
          floors={house.floors}
          color={house.color}
        />
      ))}
    </div>
  );
};

export default Houses;
