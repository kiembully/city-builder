import React from "react";

interface ColorSelectProps {
  value: string;
  onChange: (color: string) => void;
}

const colors = [
  { name: "Yellow", value: "yellow-500" },
  { name: "Blue", value: "blue-500" },
  { name: "Red", value: "red-500" },
  { name: "Green", value: "green-500" },
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
