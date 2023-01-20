import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpDiv from "../style/signUpCss";
import axios from "axios";

const SignUp = () => {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  // 연속 버튼을 막는 변수
  const [btflag, setBtFlag] = useState(false);

  //이동
  const navigate = useNavigate();

  // 회원가입 기능
  // 이후 추가

  // 닉네임 중복 검사
  const [nameCheck, setNameCheck] = useState(false);
  const nameCheckFn = (e) => {
    e.preventDefault();
    //닉네임 입력 되었는지 확인
    if (!nickName) {
      return alert("닉네임을 입력해 주세요.");
    }
    //데이터 베이스 서버 UserModel 에서 닉네임 존재 여부 파악
    const body = {
      displayName: nickName,
    };
    axios
      .post("/api/user/namecheck", body)
      .then((res) => {
        if (res.data.success) {
          if (res.data.check) {
            //등록 가능
            //사용자 중복 체크 완료
            setNameCheck(true);
            alert("사용 가능한 닉네임입니다.");
          } else {
            //등록 불가능
            setNameCheck(false);
            alert("이미 등록된 닉네임입니다.");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-6 m-6">
      <SignUpDiv>
        <h1>회원가입</h1>
        <form>
          <label>닉네임</label>
          <input
            type="text"
            required
            value={nickName}
            maxLength={20}
            minLength={3}
            onChange={(e) => setNickName(e.target.value)}
          />
          <button onClick={(e) => nameCheckFn(e)}>닉네임 중복 검사</button>
          <label>이메일</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>비밀번호</label>
          <input
            type="password"
            required
            value={pw}
            maxLength={16}
            minLength={6}
            onChange={(e) => setPw(e.target.value)}
          />
          <label>비밀번호 확인</label>
          <input
            type="password"
            required
            value={pwCheck}
            maxLength={16}
            minLength={6}
            onChange={(e) => setPwCheck(e.target.value)}
          />
          <label>휴대폰 번호</label>
          <input type="tel" maxLength={11} />
          <label>생년월일</label>
          <input type="date" />
          <label>주소</label>
          <input type="local" />
          {/* 회원가입 기능 실행 */}
          <button
          // 이후에 기능 추가 disabled={btflag} onClick={(e) => (e)}
          >
            회원가입
          </button>
        </form>
      </SignUpDiv>
    </div>
  );
};

export default SignUp;
