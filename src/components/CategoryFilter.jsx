import React from "react";

const CategoryFilter = () => {
  const options = ["0%-10%", "10%-20%", "20%-30%", "30%이상"];

  return (
    <div className="w-filterwidth absolute top-12 left-0 z-10">
      <div className="flex flex-wrap justify-between rounded-lg bg-yellow-200 py-4 px-5">
        {options.map((option, i) => (
          <div className="flex w-36 mb-3" key={i}>
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
