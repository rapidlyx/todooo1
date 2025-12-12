import React from "react";

export const Filter = ({ activeFilterValue, updateCurrentFilter }) => {
  return (
    <div className="filterContainer gap-2.5 flex py-1 px-3 items-center">
      <button
        className={`px-3 py-1 rounded-md border transition
  ${
    activeFilterValue === "all"
      ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
      : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
  }`}
        onClick={() => updateCurrentFilter("all")}
      >
        All
      </button>
      <button
        className={`px-3 py-1 rounded-md border transition
    ${
      activeFilterValue === "active"
        ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
        : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
    }`}
        onClick={() => updateCurrentFilter("active")}
      >
        Active
      </button>

      <button
        className={`px-3 py-1 rounded-md border transition
    ${
      activeFilterValue === "completed"
        ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
        : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
    }`}
        onClick={() => updateCurrentFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};
