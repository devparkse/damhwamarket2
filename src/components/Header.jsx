import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const [text, setText] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`listing/${text}`);
        setText("");
    };

    return (
        <div className="border-b-2">
            <div className="flex justify-between items-center mt-5 py-2 max-w-7xl mx-auto ">
                <Link to="/" className="flex items-center mb-5">
                    <img
                        className="w-24 h-8 mr-2"
                        src="/images/main-logo.png"
                        alt="로고"
                    />
                    <h1 className="text-2xl">담화마켓</h1>
                </Link>
                <div className="flex items-center w-1/2 relative mb-5">
                    <form className="w-full" action="" onSubmit={handleSubmit}>
                        <input
                            className="w-full h-8 bg-slate-200 rounded"
                            type="text"
                            value={text}
                            onChange={handleChange}
                        />
                        <GoSearch className="absolute right-10 top-2" />
                    </form>
                </div>
                <div className="flex items-center mb-5">
                    <Link to="/login" className="mr-2">
                        로그인
                    </Link>


                    <Link to="/basket">
                        <img
                            className="w-7 h-7"
                            src="/images/basketIcon.png"
                            alt="바구니"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
