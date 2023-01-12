import React, { useState } from "react";
import ListItem from "../components/ListItem";

const List = () => {
  const [list, setList] = useState([
    {
      img: "https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/v2uF-1672974858463-1.jpg",
      name: "제주 동백",
      price: "10,800원",
      subName: "#화이트 와인 같은 산뜻함",
      star: 4.7,
    },
    {
      img: "https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/v2uF-1672974858463-1.jpg",
      name: "sul",
      price: 1000,
      subName: "sulggun",
      star: 4.7,
    },
    {
      img: "https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/v2uF-1672974858463-1.jpg",
      name: "sul",
      price: 1000,
      subName: "sulggun",
      star: 4.7,
    },
    {
      img: "https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/v2uF-1672974858463-1.jpg",
      name: "sul",
      price: 1000,
      subName: "sulggun",
      star: 4.7,
    },
    {
      img: "https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/v2uF-1672974858463-1.jpg",
      name: "sul",
      price: 1000,
      subName: "sulggun",
      star: 4.7,
    },
    {
      img: "https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/v2uF-1672974858463-1.jpg",
      name: "sul",
      price: 1000,
      subName: "sulggun",
      star: 4.7,
    },
    {
      img: "https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/v2uF-1672974858463-1.jpg",
      name: "sul",
      price: 1000,
      subName: "sulggun",
      star: 4.7,
    },
    {
      img: "https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/v2uF-1672974858463-1.jpg",
      name: "sul",
      price: 2000,
      subName: "sulggun",
      star: 4.7,
    },
  ]);

  return (
    <div className="grid grid-cols-4 max-w-screen-xl m-auto">
      {list.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default List;
