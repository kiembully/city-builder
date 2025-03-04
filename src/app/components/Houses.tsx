import HouseCard from "./HouseCard";

const Houses = () => {
  const houses = [
    { houseNumber: 1, floors: 3, color: "bg-yellow-500" },
    { houseNumber: 2, floors: 5, color: "bg-blue-500" },
    { houseNumber: 3, floors: 2, color: "bg-red-500" },
  ];

  return (
    <div className='flex space-x-2 bg-red'>
      {houses.map((house) => (
        <HouseCard key={house.houseNumber} {...house} />
      ))}
    </div>
  );
};

export default Houses;
