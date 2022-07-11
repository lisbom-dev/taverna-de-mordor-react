import React from "react";
import Main from "./layouts/Main";

const Team: React.FC = () => {
  return (
    <Main>
      <div>
        <div className="p-7 bg-gray-50 pl-24 pt-5 flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h3 className="text-3xl font-bold ml-2 hover:text-gray-700">
            Nossa Equipe
          </h3>
        </div>
        <ul className="bg-gray-50 justify-center text-center grid grid-cols-3 place-items-center">
          <li className="m-6">
            <a href="" target="_blank">
              <img
                className=" rounded-full md:w-36 lg:w-48 lg:h-48 shadow-lg hover:opacity-90"
                src=""
                alt=""
              />
            </a>
            <span className="font-medium text-md lg:text-2xl mt ">
              <br />
            </span>
            <p className="text-sm lg:text-lg"></p>
          </li>
        </ul>
      </div>
    </Main>
  );
};

export default Team;
