import React from "react";
import { useRouter } from "next/router";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Loading from "@/components/Loading";
import { login } from "@/lib/utils";

interface AccountItemProps {}

const AccountMenuItem: React.FC<AccountItemProps> = ({}) => {
  const router = useRouter();
  console.log("AccountMenuItem");
  const { data: cuenta, isLoading } = useCurrentUser();
  const [showDropdownMenu, setShowDropdownMenu] = React.useState(false);

  const handlehover = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  return (
    <>
      <div
        onMouseEnter={handlehover}
        onMouseLeave={handlehover}
        className=" flex md:px-7 w-full h-full items-center justify-end hover:opacity-80 hover:cursor-pointer hover:bg-[#254e92] relative"
      >
        <FaRegUserCircle size={30} className="text-white" />

        <RiArrowDropDownLine size={30} className={`hidden sm:flex md:ml-1 text-white transition ${showDropdownMenu ? " rotate-180" : ""}`} />

        {showDropdownMenu ? (
          cuenta ? (
            <div className="absolute left-0 transform translate-x-0 top-full w-full bg-blue-200 shadow-md rounded-b-lg py-2">
              <div className="block p-1 lg:px-4 lg:py-2 text-black hover:bg-blue-500 text-sm"> Mi cuenta</div>
              <div className="block p-1 lg:px-4 lg:py-2 text-black hover:bg-blue-500 text-sm"> Configuración</div>
              <div
                onClick={() => {
                  signOut();
                }}
                className="block p-1 lg:px-4 lg:py-2 text-black hover:bg-blue-500 text-sm"
              >
                Cerrar Sesión
              </div>
            </div>
          ) : (
            <div className="absolute left-0 transform translate-x-0 top-full w-full bg-blue-200 shadow-md rounded-b-lg py-2">
              <div
                onClick={() => {
                  router.push("/login");
                }}
                className="block p-1 lg:px-4 lg:py-2 text-black hover:bg-blue-500 text-sm"
              >
                {" "}
                Iniciar sesion
              </div>
              <div
                onClick={() => {
                  router.push("/register");
                }}
                className="block p-1 lg:px-4 lg:py-2 text-black hover:bg-blue-500 text-sm"
              >
                {" "}
                Registrarse
              </div>
            </div>
          )
        ) : null}
      </div>
    </>
  );
};

export default AccountMenuItem;
