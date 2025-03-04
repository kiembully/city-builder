import React from "react";

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, min = 1, max = 10, step = 1, onChange }) => {
  return (
    <div className="flex flex-col w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
      {/* <span className="text-center text-sm font-medium mt-2">{value} Floors</span> */}
    </div>
  );
};

export default Slider;
