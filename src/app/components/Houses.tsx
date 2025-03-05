"use client"
import useHouseStore from "../store/useHouseStore";
import HouseCard from "./HouseCard";

const Houses = () => {
  const houses = useHouseStore((state) => state.houses);

  return (
    <div className='flex space-x-2 bg-red'>
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
};

export default Houses;
