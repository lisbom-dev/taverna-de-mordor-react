import React from "react";
import Main from "../../layouts/MainLayout";

const EventCreate: React.FC = () => (
  <Main>
    <div className=" mb-14 mx-auto relative px-8 pt-10 pb-8 bg-gradient-to-tl from-blue-400 rounded-lg to-blue-800 shadow-2xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto ">
      <form className="space-y-2 font-bold " action="/events" method="post">
        <p>Nome</p>
        <input
          className="p-2 w-full rounded-lg shadow-lg"
          type="text"
          name="name"
          placeholder="Insira seu nome"
        />
        <p>Data</p>
        <input
          className="p-2 w-full rounded-lg shadow-lg"
          type="datetime-local"
          name="date"
          id=""
          title="Event date"
        />
        <p>Localização</p>
        <input
          className="p-2 w-full rounded-lg shadow-lg"
          type="text"
          name="location"
          placeholder=" Estado, cidade, bairro, rua, número e referência"
        />
        <p>Descrição</p>
        <textarea
          className="p-2 w-full rounded-lg shadow-lg"
          name="description"
          id=""
          placeholder="Descrição do evento"
        />
        <button
          className="shadow-lg font-bold text w-full p-4 bg-blue-700 rounded-lg hover:bg-blue-800"
          type="submit"
        >
          Criar Evento
        </button>
      </form>
    </div>
  </Main>
);

export default EventCreate;
