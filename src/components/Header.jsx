import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [text, setText] = useState(0);
    const navigate = useNavigate();
    return (
        <div className="border-b-2">
            <div className="flex justify-around items-center mt-5 max-w-7xl mx-auto ">
                <div className="flex items-center mb-5">
                    <img
                        className="w-24 h-10 mr-2"
                        src="/images/main-logo.png"
                        alt="로고"
                    />
                    <h1 className="text-2xl">담화마켓</h1>
                </div>
                <div className="flex items-center w-1/2 relative mb-5">
                    <input
                        className="w-full h-8 bg-slate-200 rounded"
                        type="text"
                        name=""
                        id=""
                    />
                    <GoSearch className="absolute right-10" />
                </div>
                <div className="flex items-center mb-5">
                    <Link to="/login" className="mr-2">
                        로그인
                    </Link>

                    <button>
                        <img
                            className="w-7 h-7"
                            src="/images/basketIcon.png"
                            alt="바구니"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
