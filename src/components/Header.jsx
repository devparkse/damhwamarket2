import React from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-around items-center">
            <div className="flex">
                <img
                    className="w-24 h-7 mr-2"
                    src="/main-logo.png"
                    alt="로고"
                />
                <h1>담화마켓</h1>
            </div>

            <input className="" type="text" name="" id="" />
            <GoSearch />
            <div className="flex items-center">
                <Link to="/login" className="mr-2">
                    로그인
                </Link>
                <img src="/basketIcon.png" alt="바구니" />
            </div>
        </div>
    );
};

export default Header;
