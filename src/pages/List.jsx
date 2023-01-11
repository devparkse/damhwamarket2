import React, { useState } from "react";
import ListItem from "../components/ListItem";

const List = () => {
  const [list, setList] = useState([
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
    <div>
      <ListItem />
    </div>
  );
};

export default List;
