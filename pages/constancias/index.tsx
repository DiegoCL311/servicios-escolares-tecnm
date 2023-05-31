import { useRouter } from "next/router";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";

const Constancias = () => {
  const router = useRouter();

  const handleListaClick = () => {
    router.push("/constancias/estudios");
  };

  const handleGraficoClick = () => {
    router.push("/constancias/estudiosimss");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center z-0 my-20 gap-8">
      <div
        onClick={handleListaClick}
        className="hover:cursor-pointer flex flex-col items-center align-middle justify-center w-45% bg-white hover:bg-gray-100 transform hover:translate-y-1 hover:shadow-md text-gray-800 font-bold py-4 px-8 rounded-lg m-4 text-2xl"
      >
        <HiOutlineNewspaper size="60%" className="text-xl " />
        <p className="">Constancia de estudios</p>
      </div>
      <div
        onClick={handleGraficoClick}
        className="hover:cursor-pointer flex flex-col items-center align-middle justify-center w-45% bg-white hover:bg-gray-100 transform hover:translate-y-1 hover:shadow-md text-gray-800 font-bold py-4 px-8 rounded-lg m-4 text-2xl"
      >
        <FaRegNewspaper size="60%" className="text-xl" />
        <p>Constancia de estudios imss</p>
      </div>
    </div>
  );
};

export default Constancias;
