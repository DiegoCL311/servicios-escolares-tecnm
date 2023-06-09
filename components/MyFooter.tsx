import React from "react";
import { useRouter } from "next/router";
import gobMxSVG from "../public/images/gobMxSVG.svg";
import plecaSVG from "../public/images/plecaSVG.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

interface MyFooterProps {}

const MyFooter: React.FC<MyFooterProps> = () => {
  return (
    <>
      <div className="w-full min-h-[400px] bg-[#12322b] font-sans">
        <div className="md:mx-20 flex flex-col gap-8 md:gap-12 md:flex-row h-full py-16 font-[Montserrat] text-white  text-xs lg:text-[16px] leading-snug md:leading-relaxed justify-center ">
          <div className="">
            <img src={gobMxSVG.src} alt="" className="w-48 h-14 mb-auto mx-auto" />
          </div>

          {/** */}
          <div className="flex flex-row">
            <div className="w-full h-ful flex flex-col items-start px-[15px] decoration-white font-normal ">
              <div className="text-2xl   pb-4">Enlaces</div>

              <div className=" hover:underline hover:cursor-pointer">Participa</div>

              <div className="hover:underline hover:cursor-pointer">Publicaciones Oficiales</div>

              <div className=" hover:underline hover:cursor-pointer">Marco Juridico</div>

              <div className=" hover:underline hover:cursor-pointer">
                Plataforma Nacional de <br /> Transparencia
              </div>

              <div className=" hover:underline hover:cursor-pointer">Alerta</div>

              <div className=" hover:underline hover:cursor-pointer">Denuncia</div>
            </div>
            <div className="w-full h-full flex flex-col items-start pl-5">
              <div className=" text-2xl  font-normal pb-3"> ¿Qué es gob.mx?</div>
              <div className="">
                Es el portal único de trámites, información y participación <br /> ciudadana.{" "}
                <Link className="hover:underline" href="/">
                  Ver mas.{" "}
                </Link>
                <div className="">
                  <div className="hover:underline hover:cursor-pointer  mt-3">Portal de datos abiertos</div>
                  <div className="hover:underline hover:cursor-pointer">Declaración de accesibilidad</div>
                  <div className="hover:underline hover:cursor-pointer">Aviso de privacidad integral</div>
                  <div className="hover:underline hover:cursor-pointer">Aviso de privacidad simplificado</div>
                  <div className="hover:underline hover:cursor-pointer">Términos y condiciones</div>
                  <div className="hover:underline hover:cursor-pointer">Politicas de seguridad</div>
                  <div className="hover:underline hover:cursor-pointer">Mapa de sitio</div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-start pl-5">
              <div className=" text-sm lg:text-lg pb-3 hover:underline hover:cursor-pointer"> Denuncias contra servidores públicos</div>
              <div className="text-sm lg:text-lg">Siguenos en:</div>
              <div className="text-white flex flex-row gap-4 pt-2">
                <FaFacebookF className="hover:cursor-pointer" size={26}></FaFacebookF>
                <AiOutlineTwitter className="hover:cursor-pointer" size={26}></AiOutlineTwitter>
              </div>
            </div>
          </div>

          {/** */}
        </div>
        <div className={`bg-[url(https://framework-gb.cdn.gob.mx/landing/img/pleca.svg)] w-full h-[60px] bg-cover bg-center bg-no-repeat`}></div>
      </div>
    </>
  );
};

export default MyFooter;
