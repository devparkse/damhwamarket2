import React from "react";

const MyPageOption = ({ changePage }) => {
    const handleChangeOrderDetail = () => {
        changePage(true);
    };
    const handleChangeUserInfo = () => {
        changePage(false);
    };
    return (
        <div className="flex flex-col justify-center self-center w-32 text-center absolute top-96 left-48 h-20 p-4 mr-4 bg-zinc-100  text-cyan-600">
            <p onClick={handleChangeOrderDetail} className="border-b-2 mb-1">
                회원정보
            </p>
            <p onClick={handleChangeUserInfo} className="border-b-2 mb-1">
                주문내역
            </p>
        </div>
    );
};

export default MyPageOption;
