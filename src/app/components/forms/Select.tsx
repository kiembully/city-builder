import React from "react";

interface ColorSelectProps {
  value: string;
  onChange: (color: string) => void;
}

const colors = [
  { name: "Yellow", value: "#facc15" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Red", value: "#ef4444" },
  { name: "Green", value: "#22c55e" },
];

const Select: React.FC<ColorSelectProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Color:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 p-2 border rounded-md bg-white text-gray-700 cursor-pointer"
      >
        {colors.map((color) => (
          <option key={color.value} value={color.value}>
            {color.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
