import { useRouter } from "next/router";
import logotecnmsvg from "../public/images/logo-tecnmSVG.svg";
import logoitcsvg from "../public/images/logo-itcSVG.svg";
import logoeducacionSVG from "../public/images/logo-educacionSVG.svg";
import gap from "../public/images/gap.svg";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const TecNMNavbar = () => {
  const router = useRouter();

  const handleClick = (url: string) => {
    return () => {
      router.push(url);
    };
  };

  return (
    <>
      <div className="h-24 bg-white mt-[60px] flex flex-row gap-2 items-center mx-28">
        <img className="hover:cursor-pointer h-16" src={logoeducacionSVG.src} alt="SVG" onClick={handleClick("")!} />
        <img className=" h-16" src={gap.src} alt="SVG" />
        <img className="hover:cursor-pointer h-28 " src={logotecnmsvg.src} alt="SVG" onClick={handleClick("https://www.tecnm.mx/")!} />
        <img className=" h-16" src={gap.src} alt="SVG" />
        <img className="hover:cursor-pointer h-18" src={logoitcsvg.src} alt="SVG" onClick={handleClick("https://culiacan.tecnm.mx/")!} />
        <h2 className="text-[#1B396A] pl-8 text-3xl font-semibold">Servicios Escolares</h2>

        <div className="flex flex-row ml-auto gap-7 items-center ">
          <div className=" w-10 h-10 rounded-full bg-blue-950 flex flex-row align-middle items-center justify-center  hover:cursor-pointer">
            <AiOutlineMail
              className="text-white"
              onClick={() => {
                router.push("");
              }}
            />
          </div>
          <div className=" w-10 h-10 rounded-full bg-blue-950 flex flex-row align-middle items-center justify-center hover:cursor-pointer">
            <BsSearch
              className="text-white "
              onClick={() => {
                router.push("");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TecNMNavbar;
