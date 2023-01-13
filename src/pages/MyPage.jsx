import React from "react";
import OrderDtail from "../components/OrderDtail";
import UserInfo from "../components/UserInfo";

const MyPage = () => {
    return (
        <div>
            <UserInfo />
            <OrderDtail />
        </div>
    );
};

export default MyPage;
