import React from "react";

const Review = ({ review: { nickname, grade, content, regDt, optionName } }) => {
  return (
    <li>
      <div className="flex justify-between bg-slate-100 rounded-lg py-3 px-6">
        {nickname}
        <div className="">
          {optionName}
          {grade}
          {new Intl.DateTimeFormat("kr").format(new Date(regDt))}
        </div>
      </div>
      <div className="py-6 px-7 text-left">{content}</div>
    </li>
  );
};

export default Review;
