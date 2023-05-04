import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface SubmenuProps {
  items: { label: string; url: string }[];
}

const Submenu: React.FC<SubmenuProps> = ({ items }) => {
  const router = useRouter();

  return (
    <div className="absolute left-0 transform translate-x-0 top-full w-full bg-blue-200 shadow-md rounded-b-lg py-2">
      {items.map((item) => (
        <Link href={item.url} key={item.label} className="block p-1 lg:px-4 lg:py-2 text-black hover:bg-blue-500 text-sm">
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Submenu;
