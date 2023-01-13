import React from "react";
import MyPageOption from "./MyPageOption";

const UserInfo = () => {
    return (
        <div>
            <p>회원정보</p>

            <div className="flex flex-col">
                <div>
                    <label>이메일</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div>
                    <label>비밀번호확인</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div>
                    <label>이름</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div>
                    <label>닉네임</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div>
                    <label>주소</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div>
                    <label>휴대폰</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div>
                    <label>쿠폰</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
