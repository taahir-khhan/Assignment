import React from "react";
import { assets } from "../assets/assets";

const SideBar = () => {
  return (
    <div className="w-[300px] hidden fixed md:flex min-h-[100vh]  flex-col items-center justify-between py-5 rounded border-r-2 border-gray-300 mt-0">
      <div className="flex flex-col gap-4 w-[80%]">
        <div className="flex gap-3 items-center">
          <img src={assets.logo} width={40} alt="page-logo" />
          <h1 className="text-3xl font-medium">CodeAnt AI</h1>
        </div>
        <select className="border border-gray-300 py-2 px-2 rounded-lg">
          <option value="">Tahir Khan</option>
        </select>
        <div className="flex items-center gap-3 text-xl text-white bg-blue-600 px-4 py-2 rounded-lg">
          <img src={assets.home} width={25} alt="page-logo" />
          <span>Repositories</span>
        </div>
        <div className="flex items-center gap-3 text-xl text-gray-800 px-4 py-2">
          <img src={assets.code} width={25} alt="page-logo" />
          <span className="font-medium">AI Code Review</span>
        </div>
        <div className="flex items-center gap-3 text-xl text-gray-800 px-4 py-2">
          <img src={assets.cloud} width={25} alt="page-logo" />
          <span className="font-medium">Cloud Security</span>
        </div>
        <div className="flex items-center gap-3 text-xl text-gray-800 px-4 py-2">
          <img src={assets.book} width={25} alt="page-logo" />
          <span className="font-medium">AI Code Review</span>
        </div>
        <div className="flex items-center gap-3 text-xl text-gray-800 px-4 py-2">
          <img src={assets.gear} width={25} alt="page-logo" />
          <span className="font-medium">Settings</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-[80%]">
        <div className="flex items-center gap-3 text-xl text-gray-800 px-4 py-2">
          <img src={assets.phone} width={25} alt="page-logo" />
          <span className="font-medium">Support</span>
        </div>
        <div className="flex items-center gap-3 text-xl text-gray-800 px-4 py-2">
          <img src={assets.signout} width={25} alt="page-logo" />
          <span className="font-medium">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
