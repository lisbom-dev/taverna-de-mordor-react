import React from "react";
import Main from "../layouts/Main";

const Index: React.FC = () => {
  return (
    <Main>
      <div className="relative">
        <img
          className="filter blur-sm contrast-100 w-full object-cover h-48"
          src="{{asset('assets/images/cover-rpg.jpg')}}"
          alt="Imagem de jogadores de RPG"
        />
        <div className="left-20 bottom-10 absolute flex items-center text-lg font-semibold text-white">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src="{{user.photoUrl}}"
            alt="{{user.name}}"
          />
          <span className="ml-10">Name:</span>
        </div>
      </div>
      <div className="container mx-auto flex flex-col">
        <div className="flex">
          <span>Name:</span>
          <span>Email:</span>
        </div>
      </div>
    </Main>
  );
};

export default Index;
