import React, { useState } from "react";

const CategoryBt = ({ name }) => {
  const [btChange, setBtChange] = useState(false);
  const handleArrowChange = () => {
    setBtChange(!btChange);
  };

  return (
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
  );
};

export default CategoryBt;
