import React from "react";
import MenuItem from "./MenuItem";

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  return (
    <>
      <div className="w-full h-[50px] bg-[#1b396a] sticky top-[59px] z-[39] flex flex-row justify-center px-0 lg:px-80 ">
        <MenuItem
          title="Kárdex"
          Rlink="/kardex"
          PropItems={[
            { label: "Kárdex lista", url: "/kardex/lista" },
            { label: "Kárdex grafico", url: "/kardex/grafico" },
          ]}
        ></MenuItem>
        <MenuItem
          title="Constancias"
          Rlink="/constancias"
          PropItems={[
            { label: "Constancia de estudios", url: "/constancias/estudios" },
            { label: "Constancia de estudios imss", url: "/constancias/estudiosimss" },
          ]}
        ></MenuItem>
        <MenuItem
          title="Boletas"
          Rlink="/boletas"
          PropItems={[
            { label: "Boleta de calificaciones", url: "/boletas/duplicado" },
            { label: "etc", url: "/boletas/etc" },
          ]}
        ></MenuItem>
        <MenuItem
          title="Certificados"
          Rlink="/certificados"
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
