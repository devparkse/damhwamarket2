import React from "react";
import MyPageOption from "./MyPageOption";

const OrderDtail = () => {
    return (
        <div>
            <p>주문내역</p>
            <div>
                <MyPageOption />
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <div>
                            <p>2023/01/12</p>
                            <p>배송중</p>
                        </div>
                        <div>
                            <p>제품</p>
                            <p>신녁 다복 세트</p>
                        </div>
                        <div>
                            <p>선택 옵션</p>
                            <p>다복세트 1</p>
                        </div>
                        <p>36,900</p>
                    </div>
                    <div>
                        <p>담화를 나누러 가요</p>
                        <p>둘러보기</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDtail;
