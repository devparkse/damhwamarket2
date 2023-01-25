import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Detail = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products", "detail"], async () => {
    return axios
      .get("http://192.168.0.183:8080/api/products/12")
      .then((res) => res.data.data);
  });
  return (
    <>
      {products && (
        <div className="max-w-7xl pt-5 pb-64 m-auto text-center">
          <div className="w-leftwidth">{products.raw}</div>
          <div className="w-rightwidth"></div>
        </div>
      )}
    </>
  );
};

export default Detail;
