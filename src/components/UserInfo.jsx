import React from "react";
import MyPageOption from "./MyPageOption";

const UserInfo = () => {
    return (
        <div>
            <p>회원정보</p>
            <div>
                <MyPageOption />
            </div>
            <div>
                <p>이메일</p>
                <p>비밀번호</p>
                <p>비밀번호확인</p>
                <p>이름</p>
                <p>닉네임</p>
                <p>주소</p>
                <p>휴대폰</p>
                <p>쿠폰</p>
            </div>
        </div>
    );
};

export default UserInfo;
