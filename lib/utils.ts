import axios from "axios";
import { signIn } from "next-auth/react";

export const login = async (email: any, password: any) => {
  try {
    console.log("entro al metodo login");

    const response = await signIn("Credentials", {
      email,
      password,
    });

    console.log("respuesta");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (email: any, password: any) => {
  try {
    await axios.post("/api/register", {
      email,
      password,
    });

    await login(email, password);
  } catch (error) {
    console.log(error);
  }
};
