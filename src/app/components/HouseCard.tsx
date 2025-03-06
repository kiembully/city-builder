"use client";
import { memo } from "react";

interface HouseProps {
  id: number;
  floors: number;
  color: string;
}

const HouseCard = ({ id, floors, color }: HouseProps) => {
  console.log(`Rendering House ${id}`);

  return (
    <div className="flex flex-col items-center">
      {/* Triangle Roof */}
      <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[50px] border-l-transparent border-r-transparent border-b-black"></div>

      {/* Building */}
      <div 
        className='w-24 border border-black'
        style={{ backgroundColor: color }}
      >
        {/* Windows (Skip first floor) */}
        {Array.from({ length: floors }).map((_, index) => (
          <div key={index} className="grid grid-cols-2 gap-2 p-2">
            {index !== floors - 1 ? (
              <>
                <div className="w-5 h-5 bg-white border border-black"></div>
                <div className="w-5 h-5 bg-white border border-black"></div>
              </>
            ) : (
              <div className="h-0"></div>
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
  );
};

export default memo(HouseCard);
