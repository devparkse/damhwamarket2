import React from "react";
import { Link } from "react-router-dom";

const ListItem = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="w-imgwidth"
          src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/v2uF-1672974858463-1.jpg"
          alt=""
        />
        <span className="text-blue">테스트</span>
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
      </Link>
    </div>
  );
};

export default ListItem;
