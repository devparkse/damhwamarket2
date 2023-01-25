import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  // console.log(item);
  return (
    <div className="mt-6 mb-14 w-imgwidth">
      <Link to={`/detail/${item.seq}`}>
        <div className="rounded-lg overflow-hidden">
          <img
            className="w-imgwidth rounded-lg hover:scale-110 ease-in duration-300"
            src={`http://192.168.0.183:8080${item.basicImg}`}
            alt="상품이미지"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-neutral-700 font-fw800 mt-3 mb-3">
            {item.name}
          </span>
          <span className="text-neutral-700 font-fw800 mb-2">{item.price}</span>
          <div className="flex items-center mb-2">
            <img className="w-3 h-3 mr-1" src="/images/star.png" alt="별" />
            <span className="text-neutral-700 text-sm">{item.star}</span>
          </div>
          <span className="text-neutral-700 text-sm border-t pt-2">
            {item.subName}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
