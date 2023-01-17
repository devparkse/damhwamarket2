import React from "react";

const UserInfo = () => {
    return (
        <div className="pl-56 w-5/6 min-h-1/2">
            <p className="text-4xl text-amber-400  py-14">회원정보</p>

            <div className="flex flex-col">
                <div className="my-4 flex justify-center">
                    <label className="w-28">이메일</label>
                    <input className="bg-slate-300 rounded " type="text" />
                </div>
                <div className="my-4 flex justify-center">
                    <label className="w-28">비밀번호</label>
                    <input className="bg-slate-300 rounded " type="text" />
                </div>
                <div className="my-4 flex justify-center">
                    <label className="w-28">비밀번호확인</label>
                    <input className="bg-slate-300 rounded " type="text" />
                </div>
                <div className="my-4 flex justify-center">
                    <label className="w-28">이름</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div className="my-4 flex justify-center">
                    <label className="w-28">닉네임</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div className="my-4 flex justify-center">
                    <label className="w-28">주소</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div className="my-4 flex justify-center">
                    <label className="w-28">휴대폰</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
                <div className="my-4 flex justify-center">
                    <label className="w-28">쿠폰</label>
                    <input className="bg-slate-300 rounded" type="text" />
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
