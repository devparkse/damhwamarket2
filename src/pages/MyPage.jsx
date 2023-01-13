import React from "react";
import MyPageOption from "../components/MyPageOption";
import OrderDtail from "../components/OrderDtail";
import UserInfo from "../components/UserInfo";

const MyPage = () => {
    return (
        <div className="flex max-w-7xl mx-auto">
            <MyPageOption />
            {/* <UserInfo /> */}
            <OrderDtail />
        </div>
    );
};

export default MyPage;
