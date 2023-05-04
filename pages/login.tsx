import React from "react";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg px-8 py-10">
          <h1 className="text-3xl text-blue-800 font-bold mb-6">Iniciar sesión</h1>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-lg font-medium mb-2">
                Número de control
              </label>
              <input
                id="username"
                type="text"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-medium mb-2">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>{" "}
    </>
  );
};

export default Login;
