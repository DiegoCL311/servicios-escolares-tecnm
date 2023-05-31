import React, { useCallback, useState } from "react";
import { login, register } from "@/lib/utils";
import { useRouter } from "next/router";

import useCurrentUser from "@/hooks/useCurrentUser";
import Loading from "@/components/Loading";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  console.log("Register");
  const { data: cuenta, isLoading } = useCurrentUser();

  const myregister = useCallback(async () => {
    try {
      await register(email, password);
    } catch (error) {
      console.log(error);
    }
  }, [email, password, login]);

  //redirec to to main page if user is logged using router
  if (cuenta) {
    router.push("/");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg px-8 py-10 w-96">
          <h1 className="text-3xl text-blue-800 font-bold mb-6">Registrarse</h1>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium mb-2">
              Contraseña
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password2" className="text-lg font-medium mb-2">
              Repetir Contraseña
            </label>
            <input
              onChange={(e) => setPassword2(e.target.value)}
              id="password2"
              type="password"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <br />
          <button
            onClick={myregister}
            className={
              password !== password2
                ? "bg-gray-300 text-white font-bold py-2 rounded-md "
                : "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 p-4"
            }
            disabled={password !== password2 && password.length > 4}
          >
            Registrarse
          </button>
          <p className="mt-4">
            ¿Ya tienes una cuenta?{" "}
            <div className="text-blue-600 hover:text-blue-700 font-bold cursor-pointer">
              <p
                onClick={() => {
                  router.push("/login");
                }}
              >
                Inicar sesión
              </p>
            </div>
          </p>
        </div>
      </div>{" "}
    </>
  );
};

export default Register;
