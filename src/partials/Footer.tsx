import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-white relative shadow-top">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center py-6">
        <span className="w-fit text-start text-xs md:text-sm text-gray-500 font-bold">
          Copyright 2021{" "}
          <a
            href="https://github.com/lisbom-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:text-blue-500 underline transition-colors ease-in-out"
          >
            Lisbom
          </a>{" "}
          - Todos os Direitos Reservados
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
