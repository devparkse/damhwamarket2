import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import CategoryBt from "../components/CategoryBt";
import ListItem from "../components/ListItem";
import NavList from "../components/NavList";
import Spinner from "../components/Spinner";

const List = () => {
  const { category } = useParams();

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products", category], async () => {
    return axios
      .get(`http://192.168.0.183:8080/api/products`)
      .then((res) => res.data.data.content)
      .catch((err) => console.log(err));
  });

  const categoryBtNames = [
    { name: "도수", option: ["0%-10%", "10%-20%", "20%-30%", "30%이상"] },
    { name: "단맛", option: ["약한", "중간", "강한"] },
    { name: "신맛", option: ["약한", "중간", "강한"] },
    { name: "탄산", option: ["약한", "중간", "강한"] },
    { name: "원료", option: ["체리", "감귤류", "포도", "베리"] },
    { name: "상황별", option: ["웃어른", "연인", "친구", "혼자"] },
    {
      name: "가격",
      option: ["~ 1만원", "1만원 ~ 3만원", "3만원 ~ 5만원", "5만원 ~ 10만원"],
    },
  ];

  const navLists = ["전체보기", "탁주", "약.청주", "과실주", "증류주"];

  return (
    <>
      <div className="border-b">
        <ul className="flex py-2 max-w-screen-xl m-auto">
          {navLists.map((navList, i) => (
            <NavList navList={navList} key={i} />
          ))}
        </ul>
      </div>

      <div className="border-b-8">
        <div className="flex py-4 max-w-screen-xl m-auto">
          {categoryBtNames.map((categoryName, i) => (
            <CategoryBt
              name={categoryName.name}
              option={categoryName.option}
              key={i}
            />
          ))}
        </div>
      </div>

      {isLoading && <Spinner />}
      {error && <p>에러났어요</p>}
      {products && (
        <div className="flex max-w-screen-xl m-auto flex-wrap justify-between">
          {products.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default List;
