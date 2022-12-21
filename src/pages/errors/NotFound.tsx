import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const NotFound: React.FC = () => (
  <MainLayout>
    <div className="grow flex h-full bg-gradient-to-r from-transparent to-slate-300">
      <div className="max-w-fit h-full flex flex-col justify-center items-center m-auto">
        <div className="flex flex-col justify-center w-fit">
          <span className="w-fit justify-self-start text-xl md:text-3xl font-semibold text-gray-500">
            Oops...
          </span>
          <span className="w-fit mt-3 text-9xl md:text-[180px] lg:text-[250px] leading-none text-transparent font-bold bg-page-not-found bg-clip-text bg-center">
            404
          </span>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <span className="mt-2 font-semibold text-2xl md:text-4xl lg:text-5xl text-gray-600">
            Pagina não encontrada!!
          </span>
          <Link
            to="/home"
            title="Voltar para a página inicial"
            className="mt-6 md:self-start font-medium text-base text-gray-50 bg-slate-400 rounded-full px-4 py-2 hover:bg-slate-500 transition-colors ease-in-out"
          >
            voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default NotFound;
