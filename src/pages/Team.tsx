import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import Main from "../layouts/Main";

const teamLead = [
  {
    name: "Manuel Antunes",
    img: "https://avatars.githubusercontent.com/u/57446204?v=4",
    link: "https://github.com/Manuel-Antunes",
    role: "Líder",
  },
];

const teamDev = [
  {
    name: "Guilherme de Jesus",
    img: "https://avatars.githubusercontent.com/u/83377948?v=4",
    link: "https://github.com/guilherme-gjv",
    role: "Front-end",
  },
  {
    name: "Eduardo Queiroz",
    img: "https://avatars.githubusercontent.com/u/83377894?v=4",
    link: "https://github.com/duardoqueiroz",
    role: "Back-end",
  },
  {
    name: "Victor Lucas",
    img: "https://avatars.githubusercontent.com/u/88686013?v=4",
    link: "https://github.com/victorlucasrobs",
    role: "Back-end",
  },
  {
    name: "Wendel Ernandes",
    img: "https://avatars.githubusercontent.com/u/81384399?v=4",
    link: "https://github.com/Wendel-Ernandes",
    role: "Front-end",
  },
  {
    name: "Lucas Marques",
    img: "https://avatars.githubusercontent.com/u/104801870?v=4",
    link: "https://github.com/Lucas-Marques-Leao",
    role: "Back-end",
  },
  {
    name: "Yan Lucas",
    img: "https://avatars.githubusercontent.com/u/67091886?v=4",
    link: "https://github.com/zogss",
    role: "Front-end",
  },
];

const teamStrategy = [
  {
    name: "Letícia Duarte",
    img: "https://avatars.githubusercontent.com/u/84350666?v=4",
    link: "https://github.com/leticiabsduarte",
    role: "Gerenciamento QA",
  },
  {
    name: "Antônio Gelson",
    img: "https://avatars.githubusercontent.com/u/98917927?v=4",
    link: "https://github.com/Drakonowiz",
    role: "CTO",
  },
];

const teamArt = [
  {
    name: "Sandro Gabryel",
    img: "https://avatars.githubusercontent.com/u/24768904?v=4",
    link: "https://github.com/SandroGabryel",
    role: "Direção de Arte",
  },
  {
    name: "Bruno Martins",
    img: "https://avatars.githubusercontent.com/u/28654388?v=4",
    link: "https://github.com/brunnomenxa",
    role: "Design UI, UX",
  },
];

const Team: React.FC = () => {
  return (
    <Main>
      <div className="bg-gray-50">
        <Tab.Group>
          <div className="p-7 pt-5 flex justify-center">
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
          <Tab.List className="flex gap-3 md:gap-8 bg-gray-50 mx-auto mt-4 justify-center">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`text-sm md:text-lg font-bold hover:opacity-90 hover:text-blue-800 ${
                    selected && "border-b border-b-blue-800 text-blue-800"
                  }`}
                >
                  Liderança
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`text-sm md:text-lg font-bold hover:opacity-90 hover:text-blue-800 ${
                    selected && "border-b border-b-blue-800 text-blue-800"
                  }`}
                >
                  Desenvolvimento
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`text-sm md:text-lg font-bold hover:opacity-90 hover:text-blue-800 ${
                    selected && "border-b border-b-blue-800 text-blue-800"
                  }`}
                >
                  Estratégia
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`text-sm md:text-lg font-bold hover:opacity-90 hover:text-blue-800 ${
                    selected && "border-b border-b-blue-800 text-blue-800"
                  }`}
                >
                  Arte
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ul className="bg-gray-50 justify-center text-center grid grid-cols-3 place-items-center">
                {teamLead.map(teamMate => {
                  return (
                    <li className="m-6">
                      <a href={teamMate.link} target="_blank">
                        <img
                          className="rounded-full mx-auto md:w-36 lg:w-48 lg:h-48 min-w-[75px] shadow-lg hover:opacity-90"
                          src={teamMate.img}
                          alt={teamMate.name}
                        />
                      </a>
                      <span className="font-medium text-md lg:text-2xl mt ">
                        <br />
                        {teamMate.name}
                      </span>
                      <p className="text-sm lg:text-lg">{teamMate.role}</p>
                    </li>
                  );
                })}
              </ul>
            </Tab.Panel>
            <Tab.Panel>
              <ul className="bg-gray-50 justify-center text-center grid grid-cols-3 place-items-center">
                {teamDev.map(teamMate => {
                  return (
                    <li className="m-6">
                      <a href={teamMate.link} target="_blank">
                        <img
                          className="rounded-full mx-auto md:w-36 lg:w-48 lg:h-48 min-w-[75px] shadow-lg hover:opacity-90"
                          src={teamMate.img}
                          alt={teamMate.name}
                        />
                      </a>
                      <span className="font-medium text-md lg:text-2xl mt ">
                        <br />
                        {teamMate.name}
                      </span>
                      <p className="text-sm lg:text-lg">{teamMate.role}</p>
                    </li>
                  );
                })}
              </ul>
            </Tab.Panel>
            <Tab.Panel>
              <ul className="bg-gray-50 justify-center text-center grid grid-cols-3 place-items-center">
                {teamStrategy.map(teamMate => {
                  return (
                    <li className="m-6">
                      <a href={teamMate.link} target="_blank">
                        <img
                          className="rounded-full mx-auto md:w-36 lg:w-48 lg:h-48 min-w-[75px] shadow-lg hover:opacity-90"
                          src={teamMate.img}
                          alt={teamMate.name}
                        />
                      </a>
                      <span className="font-medium text-md lg:text-2xl mt ">
                        <br />
                        {teamMate.name}
                      </span>
                      <p className="text-sm lg:text-lg">{teamMate.role}</p>
                    </li>
                  );
                })}
              </ul>
            </Tab.Panel>
            <Tab.Panel>
              <ul className="bg-gray-50 justify-center text-center grid grid-cols-3 place-items-center">
                {teamArt.map(teamMate => {
                  return (
                    <li className="m-6">
                      <a href={teamMate.link} target="_blank">
                        <img
                          className="rounded-full mx-auto md:w-36 lg:w-48 lg:h-48 min-w-[75px] shadow-lg hover:opacity-90"
                          src={teamMate.img}
                          alt={teamMate.name}
                        />
                      </a>
                      <span className="font-medium text-md lg:text-2xl mt ">
                        <br />
                        {teamMate.name}
                      </span>
                      <p className="text-sm lg:text-lg">{teamMate.role}</p>
                    </li>
                  );
                })}
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Main>
  );
};

export default Team;
