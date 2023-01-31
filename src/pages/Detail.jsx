import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import Spinner from "../components/Spinner";

const Detail = () => {
    const { productId } = useParams();
    // console.log(productId);
    const {
        isLoading,
        error,
        data: productDetail,
    } = useQuery(["products", "detail"], async () => {
        return axios
            .get(`http://192.168.0.183:8080/api/products/${productId}`)
            .then((res) => res.data.data)
            .catch((err) => console.log(err));
    });
    const { data: reviews } = useQuery(["products", "review"], async () => {
        return axios
            .get(`http://192.168.0.183:8080/api/reviews/${productId}`)
            .then((res) => res.data.data)
            .catch((err) => console.log(err));
    });
    // console.log(reviews);
    console.log(productDetail);
    return (
        <>
            {isLoading && <Spinner />}
            {error && <p>에러났어요</p>}
            {productDetail && (
                <div className="max-w-7xl pt-5 px-28 pb-64 m-auto text-center">
                    <div className="w-leftwidth">
                        <div>
                            <img className="" src="" alt="" />
                            <div>{productDetail.raw}</div>
                        </div>
                        <ul>
                            {reviews &&
                                reviews.map((review, i) => (
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
