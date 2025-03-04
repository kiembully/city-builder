"use client";
import React from "react";

interface HouseCardProps {
  houseNumber: number;
  floors: number;
  color: string;
}

const HouseCard: React.FC<HouseCardProps> = ({
  houseNumber,
  floors,
  color,
}) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      {/* House Number */}
      <div className="text-sm font-semibold">House {houseNumber}</div>

      {/* Roof */}
      <div className="w-64 h-10 bg-gray-500 clip-triangle"></div>

      {/* House Body */}
      <div
        className={`w-48 border-2 border-black ${color} relative flex flex-col items-center p-2`}
      >
        {/* Windows - Grid of 2 per row */}
        <div className="grid grid-cols-2 gap-2 w-full">
          {Array.from({ length: floors * 2 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-white border border-black"
            ></div>
          ))}
        </div>

        {/* Door */}
        <div className="mt-4 flex justify-between w-full">
          <div className="w-16 h-16 bg-white border border-black"></div>
          <div className="transform w-12 h-24 bg-white border border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
