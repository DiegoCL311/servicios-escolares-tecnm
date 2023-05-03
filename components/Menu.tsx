import React from "react";
import MenuItem from "./MenuItem";

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  return (
    <>
      <div className="w-full h-[50px] bg-[#1b396a] sticky top-[59px]  z-39 flex flex-row   align-middle items-center justify-center px-80">
        <MenuItem title="Kardex" link="/kardex"></MenuItem>
        <MenuItem
          title="Constancias"
          link="/constancias"
          PropItems={[
            { label: "Constancias de estudio", url: "/constancias/estudio" },
            { label: "etc", url: "/constancias/etc" },
          ]}
        ></MenuItem>
        <MenuItem
          title="Boletas"
          link="/boletas"
          PropItems={[
            { label: "Boletas de calificaciones", url: "/boletas/duplicado" },
            { label: "etc", url: "/boletas/etc" },
          ]}
        ></MenuItem>
        <MenuItem
          title="Certificados"
          link="/kardex"
          PropItems={[
            { label: "Certificados de estudios completo", url: "/certificados/completo" },
            { label: "Certificados de estudios incompleto", url: "/certificados/incompleto" },
          ]}
        ></MenuItem>
      </div>
    </>
  );
};

export default Menu;
