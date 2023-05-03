import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface SubmenuProps {
  items: { label: string; url: string }[];
}

const Submenu: React.FC<SubmenuProps> = ({ items }) => {
  const router = useRouter();

  return (
    <div className="absolute left-0 transform translate-x-0 top-full w-full bg-white shadow-md rounded-b-lg py-2">
      {items.map((item) => (
        <Link href={item.url} key={item.label} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Submenu;
