import React from "react";
import { assets } from "../assets/assets";
import Repo from "./Repo";
const Main = () => {
  return (
    <div className="w-full md:w-0 md:flex-grow h-screen">
      <div className="md:m-3  border-t-2 border-b-2 md:border border-gray-300 md:rounded-lg">
        <div className="flex flex-col gap-2 items-start md:items-center md:flex-row md:justify-between px-5 py-4">
          <div className="flex flex-col items-start gap-1">
            <h1 className="font-semibold text-3xl">Repositories</h1>
            <p className="text-gray-500">33 total repositories</p>
          </div>
          <div className="flex flex-row gap-4 ">
            <button className="border border-gray-300 px-3 py-2 flex items-center gap-1 rounded-lg">
              <img src={assets.refresh} width={15} alt="page-logo" />
              <span>Refresh All</span>
            </button>
            <button className="bg-blue-600 px-3 py-2 text-white flex items-center gap-1 rounded-lg">
              <img src={assets.plus} width={15} alt="page-logo" />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        <div className="px-5 pb-4">
          <div className="flex items-center justify-between w-full md:w-2/6 mt-2 pl-3 border-2 border-gray-300 rounded-lg shadow-sm transition-all">
            <img src={assets.search} width={15} alt="page-logo" />
            <input
              className="w-full h-full px-4 py-3 pl-2 text-gray-700 placeholder-gray-400  rounded-lg text-sm "
              type="text"
              placeholder="Search Repositories"
            />
          </div>
        </div>

        <Repo
          title={"design-system"}
          privacy={"Public"}
          size={7320}
          language={"React"}
          time={1}
        />
        <Repo
          title={"codeant-ci-app"}
          privacy={"Private"}
          size={5871}
          language={"Javascript"}
          time={2}
        />
        <Repo
          title={"analytics-dashboard"}
          privacy={"Private"}
          size={4521}
          language={"Python"}
          time={5}
        />
        <Repo
          title={"mobile-app"}
          privacy={"Public"}
          size={3096}
          language={"Swift"}
          time={3}
        />
        <Repo
          title={"e-commerce-platform"}
          privacy={"Private"}
          size={6210}
          language={"Java"}
          time={6}
        />
        <Repo
          title={"blog-website"}
          privacy={"Public"}
          size={1876}
          language={"HTML/CSS"}
          time={4}
        />
        <Repo
          title={"social-network"}
          privacy={"Private"}
          size={5432}
          language={"PHP"}
          time={7}
        />
      </div>
    </div>
  );
};

export default Main;
