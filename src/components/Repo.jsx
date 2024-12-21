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
      <div className="flex items-start sm:flex-row gap-4 md:gap-10 sm:items-center text-sm sm:text-[18px]">
        <div className="flex items-center justify-center gap-2">
          <span>{language}</span>
          <div className="h-[10px] w-[10px] rounded-full bg-blue-500 sm:mb-[-4px]"></div>
        </div>
        <div className="flex items-center gap-[2px]">
          <img src={assets.database} alt="" />
          <span>
            {size} <span className="pl-[1px]">KB</span>
          </span>
        </div>
        <p>Updated {time} days ago</p>
      </div>
    </div>
  );
};

export default Repo;
