import React from "react";

const OrderDtail = () => {
    return (
        <div className="pl-56 w-5/6">
            <p className="text-4xl text-amber-400 py-14">주문내역</p>

            <div className="flex flex-col">
                <div>
                    <div className="flex border-2 border-red-200">
                        <img src="" alt="z" />
                        <div>
                            <div className="flex">
                                <p>2023/01/12</p>
                                <p>배송중</p>
                            </div>
                            <div className="flex">
                                <p>제품</p>
                                <p>신녁 다복 세트</p>
                            </div>
                            <div className="flex">
                                <p>선택 옵션</p>
                                <p>다복세트 1</p>
                                <p>36,900</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-dotted border-2 rounded">
                        <p>담화를 나누러 가요</p>
                        <button className="bg-pink-300 rounded text-white">
                            둘러보기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDtail;
