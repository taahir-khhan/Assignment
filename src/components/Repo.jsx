import React from "react";
import { assets } from "../assets/assets";

const Repo = ({ title, privacy, size, language, time }) => {
  return (
    <div className="w-full flex flex-col gap-4 border-b-2 pb-4 p-6">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-medium">{title}</h1>
        <span className="bg-blue-100 px-2  border border-blue-500 rounded-3xl text-blue-500">
          {privacy}
        </span>
      </div>
      <div className="flex gap-10 items-center text-[18px]">
        <div className="flex items-center justify-center gap-2">
          <span>{language}</span>
          <div className="h-[10px] w-[10px] rounded-full bg-blue-500 mb-[-4px]"></div>
        </div>
        <div className="flex items-center gap-1">
          <img src={assets.database} alt="" />
          <span>
            {size} <span className="pl-[2px]">KB</span>
          </span>
        </div>
        <p>Updated {time} days ago</p>
      </div>
    </div>
  );
};

export default Repo;
