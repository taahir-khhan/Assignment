import React from "react";
import Main from "../components/Main";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="flex items-center gap-5 ">
      <SideBar />
      <Main />
    </div>
  );
};

export default Home;
