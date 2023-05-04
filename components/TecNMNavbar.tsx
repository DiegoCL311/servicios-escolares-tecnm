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
      <div className="flex flex-col lg:flex-row mt-[60px] justify-center overflow-hidden">
        <div className="h-24 bg-white hidden md:flex flex-row md:gap-2 items-center justify-center m-auto">
          <img className="hover:cursor-pointer h-16" src={logoeducacionSVG.src} alt="SVG" onClick={handleClick("")!} />
          <img className=" h-16" src={gap.src} alt="SVG" />
          <img className="hover:cursor-pointer h-28 " src={logotecnmsvg.src} alt="SVG" onClick={handleClick("https://www.tecnm.mx/")!} />
          <img className=" h-16" src={gap.src} alt="SVG" />
          <img className="hover:cursor-pointer h-16" src={logoitcsvg.src} alt="SVG" onClick={handleClick("https://culiacan.tecnm.mx/")!} />
        </div>

        <div className="md:h-24 h-16 bg-white flex flex-row gap-10 lg:gap-4 items-center m-auto">
          <div className="text-[#1B396A] text-lg sm:text-3xl font-semibold align-middle items-center justify-center m-auto my-2">Servicios Escolares</div>

          <div className=" flex flex-row ml-auto gap-7 items-center m-auto">
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
      </div>
    </>
  );
};

export default TecNMNavbar;
