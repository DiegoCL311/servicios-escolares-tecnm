import React from "react";
import { useRouter } from "next/router";
import { RiArrowDropDownLine } from "react-icons/ri";
import Submenu from "./Submenu";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  Rlink: string;
  PropItems?: { label: string; url: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ title, Rlink, PropItems }) => {
  const router = useRouter();
  const [showDropdownMenu, setShowDropdownMenu] = React.useState(false);

  const handlehover = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  const handleClick = () => {
    router.push(Rlink, undefined, { shallow: true });
  };

  return (
    <>
      <Link
        href={Rlink}
        onMouseEnter={handlehover}
        onMouseLeave={handlehover}
        className=" flex px-7 w-full h-full items-center justify-center hover:opacity-80 hover:cursor-pointer hover:bg-[#254e92] relative"
      >
        <p className="text-white text-xl px-2">{title}</p>

        {PropItems && <RiArrowDropDownLine size={30} className={`ml-1 text-white transition ${showDropdownMenu ? " rotate-180" : ""}`} />}

        {showDropdownMenu && PropItems && <Submenu items={PropItems} />}
      </Link>
    </>
  );
};

export default MenuItem;
