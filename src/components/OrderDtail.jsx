import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDtail = () => {
    const navigate = useNavigate();
    return (
        <div className="pl-56 w-5/6 min-h-1/2 ">
            <p className="text-4xl text-amber-400 py-14">주문내역</p>

            <div className="flex flex-col max-h-screen ">
                <div>
                    <div className="flex border-2 border-red-200 p-3 rounded-xl mb-6">
                        <img
                            className="w-32 h-32"
                            src="https://cdn.pixabay.com/photo/2022/12/26/11/44/squirrel-7678830_960_720.jpg"
                            alt="z"
                        />
                        <div className="pl-2">
                            <div className="flex pb-12">
                                <p className="pr-12">2023/01/12</p>
                                <p>배송중</p>
                            </div>
                            <div className="flex">
                                <p className="pr-28">제품</p>
                                <p>신년 다복 세트</p>
                            </div>
                            <div className="flex">
                                <p className="pr-20">선택 옵션</p>
                                <p className="pr-96">다복세트 1</p>
                                <p>36,900</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-dotted border-2 rounded-xl p-10 border-red-200 mt-10 text-center ">
                        <p className="pb-10 text-2xl text-center">
                            담화를 나누러 가요 -.{"<"}
                        </p>
                        <button
                            onClick={() => navigate("/")}
                            className="bg-pink-300 rounded text-white px-8 py-4"
                        >
                            둘러보기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDtail;
