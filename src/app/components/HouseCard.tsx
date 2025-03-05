"use client";
interface HouseProps {
  house?: {
    id: number;
    floors: number;
    color: string;
  };
}

const HouseCard = ({ house }: HouseProps) => {
  if (!house) {
    return <div className="text-red-500">Error: House data is missing</div>;
  }

  return (
    <div className="flex items-end space-x-6 p-6">
      <div key={house.id} className="flex flex-col items-center">
        {/* Triangle Roof */}
        <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[50px] border-l-transparent border-r-transparent border-b-black"></div>

        {/* Building */}
        <div
          className="w-24 border border-black"
          style={{ backgroundColor: house.color }}
        >
          {/* Windows */}
          {Array.from({ length: house.floors }).map((_, index) => (
            <div key={index} className="grid grid-cols-2 gap-2 p-2">
              {index !== house.floors - 1 ? ( // Removes windows on the first floor
                <>
                  <div className="w-5 h-5 bg-white border border-black"></div>
                  <div className="w-5 h-5 bg-white border border-black"></div>
                </>
              ) : (
                <div className="h-0"></div> // Adds empty space for alignment
              )}
            </div>
          ))}

          {/* Door */}
          <div className="flex">
            <div className="w-5 h-5 bg-white border border-black ml-2"></div>
            <div className="w-6 h-12 bg-white border border-black mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
