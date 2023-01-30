import React from "react";

const Members = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto ">
      <h1 className="text-4xl font-extrabold text-amber-400 py-20 pl-8 mb-5">
        Members
      </h1>
      <div className="mt-40">
        <h2 className="text-3xl font-extrabold my-8 text-sky-400 uppercase">
          Front
        </h2>
        <div className="flex gap-x-20 text-lg font-semibold">
          <p className="text-center">
            <img
              className="h-40 w-40 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/cute.jpg")}
              alt="f-1"
            />
            박시은
            <br />
            mail
          </p>
          <p className="text-center">
            <img
              className="h-40 w-40 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/cryingcat.jpg")}
              alt="f-2"
            />
            조승현
            <br />
            mail
          </p>
          <p className="text-center">
            <img
              className="h-40 w-40 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/catsmile.png")}
              alt="f-3"
            />
            이효정
            <br />
            mail
          </p>
        </div>

        <h2 className="text-3xl font-extrabold pt-20 my-5 text-sky-400 uppercase">
          Back
        </h2>
        <div className="flex gap-x-20 text-lg font-semibold">
          <p className="text-center">
            <img
              className="h-40 w-40 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/puppy.jpg")}
              alt="b-1"
            />
            이영준
            <br />
            mail
          </p>
          <p className="text-center">
            <img
              className="h-40 w-40 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/cuty.jpg")}
              alt="b-2"
            />
            우현주
            <br />
            mail
          </p>
          <p className="text-center">
            <img
              className="h-40 w-40 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/wang.jpg")}
              alt="b-3"
            />
            남현우
            <br />
            mail
          </p>
          <p className="text-center">
            <img
              className="h-40 w-40 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/wavewang.png")}
              alt="b-4"
            />
            권영장
            <br />
            mail
          </p>
        </div>
      </div>
    </div>
  );
};

export default Members;
