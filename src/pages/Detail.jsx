import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import Spinner from "../components/Spinner";

const Detail = () => {
  const { product } = useParams();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products", "detail"], async () => {
    return axios
      .get(`http://192.168.0.183:8080/api/products/${product}`)
      .then((res) => res.data.data);
  });
  const { data: reviews } = useQuery(["products", "review"], async () => {
    return axios
      .get(`http://192.168.0.183:8080/api/reviews/1`)
      .then((res) => res.data.data);
  });
  console.log(reviews);
  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>에러났어요</p>}
      {products && (
        <div className="max-w-7xl pt-5 pb-64 m-auto text-center">
          <div className="w-leftwidth">
            {products.raw}
            <ul>
              {reviews && reviews.map((review, i) => (
                <Review key={i} review={review} />
              ))}
            </ul>
          </div>
          <div className="w-rightwidth"></div>
        </div>
      )}
    </>
  );
};

export default Detail;
