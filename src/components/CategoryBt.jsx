import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";

const CategoryBt = ({ name }) => {
  const [btChange, setBtChange] = useState(false);
  const [categoryOption, setCategoryOption] = useState(false);
  const handleArrowChange = () => {
    setBtChange(!btChange);
    setCategoryOption(!categoryOption);
  };

  return (
    <div className="relative">
      <button
        onClick={handleArrowChange}
        className="flex py-2 px-3 mr-5 items-center border rounded-md text-sm"
      >
        {name}
        {btChange ? (
          <img
            className="w-5 ml-5 rotate-180"
            src="/images/arrow-down.png"
            alt="화살표"
          />
        ) : (
          <img className="w-5 ml-5" src="/images/arrow-down.png" alt="화살표" />
        )}
      </button>
      {categoryOption && <CategoryFilter />}
    </div>
  );
};

export default CategoryBt;
