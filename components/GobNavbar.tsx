import NavbarItem from "./GobNavbarItem";
import { BsList, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/router";
import gobMxSVG from "../public/images/gobMxSVG.svg";

const TOP_OFFSET = 66;

const GobNavbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("https://www.gob.mx/");
  };

  return (
    <nav className="w-full fixed top-0 z-40">
      <div className="h-[60px] md:px-4 flex flex-row items-center gap-1 md:gap-14  bg-[#0C231E] ">
        <img className="hover:cursor-pointer h-10 pl-0 sm:pl-32" src={gobMxSVG.src} alt="SVG" onClick={handleClick} />

        <div className="flex-row ml-auto gap-2 md:gap-7 items-center pr-0 sm:pr-32 flex">
          <NavbarItem label="Trámites" link="https://www.gob.mx/tramites" />
          <NavbarItem label="Gobierno" link="https://www.gob.mx/gobierno" />
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            {" "}
            <BsSearch
              onClick={() => {
                router.push("https://www.gob.mx/busqueda");
              }}
            />
          </div>
        </div>


      </div>
    </nav>
  );
};

export default GobNavbar;
