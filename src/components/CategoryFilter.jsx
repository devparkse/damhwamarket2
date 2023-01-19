import React from "react";

const CategoryFilter = ({ option }) => {
  return (
    <div className="w-filterwidth absolute top-12 left-0 z-10">
      <div className="flex flex-wrap justify-between rounded-lg bg-yellow-200 py-4 px-5">
        {option.map((option, i) => (
          <div className="flex w-36 my-2
          " key={i}>
            <button>
              <input type="checkbox" />
            </button>
            <button className="ml-4">{option}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
