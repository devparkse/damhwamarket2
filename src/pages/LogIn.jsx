import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginDiv from "../style/loginCss";

const LogIn = () => {
    const [loginUser, setLoginUser] = useState({});
    const handelChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    };

    const navigate = useNavigate();

    return (
        <div className="p-6 m-6">
            <LoginDiv>
                <h1>담화마켓</h1>
                <form>
                    <label>이메일</label>
                    <input
                        type="email"
                        name="email"
                        value={loginUser.email}
                        onChange={handelChange}
                        required
                    />
                    <label>비밀번호</label>
                    <input
                        type="password"
                        name="pwd"
                        value={loginUser.password}
                        onChange={handelChange}
                        required
                    />
                    <button>로그인</button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            navigate("/signup");
                        }}
                    >
                        회원가입
                    </button>
                    <Link>아이디/비밀번호 찾기</Link>
                </form>
            </LoginDiv>
        </div>
    );
};

export default LogIn;
