import React from "react";
import { useRouter } from "next/router";
import { BsNewspaper, BsEnvelopePaper } from "react-icons/bs";

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-4">Bienvenido a Servicios Escolares</h1>
        <h2 className="text-lg text-center mb-8">Aquí podrás obtener tus constancias de estudios, kardex, boletas y certificados.</h2>

        <div className="flex justify-center space-x-4 mb-8">
          <div
            className="bg-white rounded-lg shadow-lg p-12 flex flex-col items-center cursor-pointer transition duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            onClick={() => handleCardClick("/constancias")}
          >
            <BsEnvelopePaper className="w-36 h-36 mb-4 text-black" />
            <h3 className="text-lg font-semibold mb-2">Constancias</h3>
          </div>
          <div
            className="bg-white rounded-lg shadow-lg p-12 flex flex-col items-center cursor-pointer transition duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            onClick={() => handleCardClick("/kardex")}
          >
            <BsNewspaper className="w-36 h-36 mb-4 text-black" />
            <h3 className="text-lg font-semibold mb-2">Kardex</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Acerca de nosotros:</h3>
          <p className="mb-4">
            Somos un equipo dedicado a facilitar las actividades de control escolar. Nuestra plataforma te permite obtener de manera rápida y sencilla
            tus constancias de estudios y kardex, brindándote la comodidad que necesitas en tu vida académica.
          </p>
          <p>¡Explora nuestros servicios y descubre cómo podemos ayudarte en tu camino educativo!</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-12">
          <h3 className="text-lg font-semibold mb-4">Integrantes:</h3>
          <p className="mb-4">Cruz Lugo Diego</p>
          <p className="mb-4">Gil Labra Jesús Alejandro</p>
          <p className="mb-4">Córdova García Alberto David</p>
          <p className="mb-4">Flores Valdez Lilian Marisol</p>
          <p className="mb-4">Sánchez Lázaro Saúl Jaciel</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
