import NavbarItem from "./GobNavbarItem";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import gobMxSVG from "../public/images/gobMxSVG.svg";

const TOP_OFFSET = 66;

const GobNavbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("https://www.gob.mx/");
  };

  console.log(gobMxSVG);

  return (
    <nav className="w-full fixed z-40 top-0">
      <div className="h-[60px] px-4 flex flex-row items-center gap-16  bg-[#0C231E] ">
        <img className="hover:cursor-pointer h-10 pl-32" src={gobMxSVG.src} alt="SVG" onClick={handleClick} />

        <div className="flex flex-row ml-auto gap-7 items-center pr-32">
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
