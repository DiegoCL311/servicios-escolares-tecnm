import React from "react";
import { useRouter } from "next/router";

interface SubmenuProps {
  items: { label: string; url: string }[];
}

const Submenu: React.FC<SubmenuProps> = ({ items }) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className="absolute left-0 transform translate-x-0 top-full w-full bg-white shadow-md rounded-b-lg py-2">
      {items.map((item) => (
        <a onClick={() => handleClick(item.url)} key={item.label} href={item.url} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Submenu;
