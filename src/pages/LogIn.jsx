import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginDiv from "../style/loginCss";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  return (
    <LoginDiv>
      <div className="">
        <h1>담화마켓</h1>
        <form>
          <label>이메일</label>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>비밀번호</label>
          <input
            type="password"
            required
            maxLength={8}
            value={pw}
            onChange={(event) => setPw(event.target.value)}
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
          <Link>
            아이디/비밀번호 찾기
          </Link>
        </form>
      </div>
    </LoginDiv>
  );
};

export default LogIn;
