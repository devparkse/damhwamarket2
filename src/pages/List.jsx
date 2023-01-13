import React, { useState } from "react";
import CategoryBt from "../components/CategoryBt";
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
    <>
      <div className="border-b">
        <ul className="flex py-2 max-w-screen-xl m-auto">
          <li className="mr-10 font-semibold cursor-pointer">전체보기</li>
          <li className="mr-10 font-semibold cursor-pointer">탁주</li>
          <li className="mr-10 font-semibold cursor-pointer">약.청주</li>
          <li className="mr-10 font-semibold cursor-pointer">과실주</li>
          <li className="mr-10 font-semibold cursor-pointer">증류주</li>
        </ul>
      </div>

      <div className="border-b-8">
        <div className="flex py-4 max-w-screen-xl m-auto">
          <CategoryBt name="도수" />
          <CategoryBt name="단맛" />
          <CategoryBt name="신맛" />
          <CategoryBt name="탄산" />
          <CategoryBt name="원료" />
          <CategoryBt name="상황별" />
          <CategoryBt name="가격" />
        </div>
      </div>

      <div className="flex max-w-screen-xl m-auto flex-wrap justify-between">
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default List;
