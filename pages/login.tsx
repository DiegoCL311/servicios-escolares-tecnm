import React, { useCallback, useState } from "react";
import { login } from "@/lib/utils";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import Loading from "@/components/Loading";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  console.log("Login");
  const { data: cuenta, isLoading } = useCurrentUser();

  const mylogin = useCallback(async () => {
    try {
      console.log("login");

      await login(email, password);
    } catch (error) {
      console.log(error);
    }
  }, [email, password, login]);

  //redirecto to main page if user is logged using
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
          <h1 className="text-3xl text-blue-800 font-bold mb-6">Iniciar sesión</h1>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="username"
              type="text"
              data-testid="email-input"
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
              data-testid="password-input"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <br />
          <button
            onClick={mylogin}
            data-testid="login-btn"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 p-4"
          >
            Iniciar sesión
          </button>

          <div className="mt-4">
            ¿No tienes una cuenta?{" "}
            <div className="text-blue-600 hover:text-blue-700 font-bold cursor-pointer">
              <div
                onClick={() => {
                  router.push("/register");
                }}
              >
                Regístrate
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Login;
