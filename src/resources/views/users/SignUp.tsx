import React from "react";

const SignUp: React.FC = () => {
  return (
    <div>
      <div className="w-full lg:w-6/12 px-4 mx-auto pt-6 mt-5 border border-gray-300 bg-gray-200 rounded-lg ">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-none border-0 ">
          <div className="mt-6 text-gray-600 text-center text-xl mb-3 font-bold ">
            <h3 className="mb-3">Estamos quase finalizando...</h3>
            <small>Informe os dados a seguir:</small>
          </div>
          <div className="rounded-t mb-0 px-6 py-6">
            <hr className="border-b-1 border-gray-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form action="/users" method="POST">
              <input type="hidden" name="email" value="{{email}}" />
              <input type="hidden" name="photoUrl" value="{{photoUrl}}" />
              <input type="hidden" name="name" value="{{name}}" />
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase tracking-wider text-gray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Nome
                </label>
                <input
                  type="username"
                  value="{{name}}"
                  required
                  name="username"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Telefone
                </label>
                <input
                  type="cellPhoneNumber"
                  required
                  name="cellPhoneNumber"
                  pattern="^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Instagram (opcional)
                </label>
                <input
                  type="instagramRef"
                  name="instagramRef"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="@bilbo_bolseiro"
                />
              </div>
              <div className="relative w-full mb-3">
                <div id="remaining" className="flex flex-row justify-between">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Descrição (opcional)
                  </label>
                  <template>
                    <span className="text-xs mr-5 mt-1 text-red-500"></span>
                  </template>
                </div>
                <textarea
                  id="content"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="description"
                  placeholder="Descrição do usuário..."
                ></textarea>
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover:bg-gray-600 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                >
                  Criar conta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
