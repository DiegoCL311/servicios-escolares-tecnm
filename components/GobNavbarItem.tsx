import React from "react";
import { useRouter } from "next/dist/client/router";

interface GobNavbarItemProps {
  label: string;
  link: string;
}

const GobNavbarItem: React.FC<GobNavbarItemProps> = ({ label, link }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div onClick={handleClick} className="text-white cursor-pointer hover:text-yellow-300 transition font-semibold">
      {label}
    </div>
  );
};

export default GobNavbarItem;
