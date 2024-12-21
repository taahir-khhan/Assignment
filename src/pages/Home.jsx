import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { assets } from "../assets/assets";
import Main from "../components/Main";
import SideBar from "../components/SideBar";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col md:flex-row items-center h-full relative">
      {/* Mobile UI */}
      <div className="w-full flex items-center justify-between px-2 py-4 md:hidden">
        <div className="flex gap-2 items-center">
          <img src={assets.logo} width={30} alt="page-logo" />
          <h1 className="text-2xl font-medium">CodeAnt AI</h1>
        </div>
        {show === true ? (
          <RxCross1
            className="cursor-pointer transition-opacity duration-400 ease-in-out"
            onClick={() => setShow(!show)}
            size={28}
          />
        ) : (
          <RxHamburgerMenu
            className="cursor-pointer transition-opacity duration-400 ease-in-out"
            onClick={() => setShow(!show)}
            size={28}
          />
        )}
        {show && (
          <div
            className={`flex flex-col gap-4 w-full absolute left-0 top-[60px] bg-white pt-2 pb-10 px-5 overflow-hidden transition-opacity duration-500 ease-in-out border-t-2 ${
              show
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-[60px]"
            }`}
          >
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

            <div className="flex items-center gap-3 text-xl text-gray-800 px-4 py-2">
              <img src={assets.phone} width={25} alt="page-logo" />
              <span className="font-medium">Support</span>
            </div>
            <div className="flex items-center gap-3 text-xl text-gray-800 px-4 py-2">
              <img src={assets.signout} width={25} alt="page-logo" />
              <span className="font-medium">Log Out</span>
            </div>
          </div>
        )}
      </div>
      <SideBar />
      <Main />
    </div>
  );
};

export default Home;
