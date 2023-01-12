import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  
  return (
    <div>
      <Link to="/">
        <img className="w-imgwidth" src={item.img} alt="상품이미지" />
        <div className="flex flex-col">
          <span className="text-neutral-700 font-bold">{item.name}</span>
          <span className="text-neutral-700 font-bold">{item.price}</span>
          <div className="flex items-center">
            <img className="w-3 h-3 mr-1" src="/star.png" alt="별" />
            <span className="text-neutral-700 text-sm">{item.star}</span>
          </div>
          <span className="">{item.subName}</span>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
