import { useRouter } from "next/router";
import { CgList } from "react-icons/cg";
import { MdNewspaper } from "react-icons/md";

const Kárdex = () => {
  const router = useRouter();

  const handleListaClick = () => {
    router.push("/kardex/lista");
  };

  const handleGraficoClick = () => {
    router.push("/kardex/grafico");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center z-0 my-20 gap-8">
      <div
        onClick={handleListaClick}
        className="hover:cursor-pointer flex flex-col items-center align-middle justify-center w-45% bg-white hover:bg-gray-100 transform hover:translate-y-1 hover:shadow-md text-gray-800 font-bold py-4 px-8 rounded-lg m-4 text-2xl"
      >
        <CgList size="60%" className="text-xl " />
        <p className="">Kárdex Lista</p>
      </div>
      <div
        onClick={handleGraficoClick}
        className="hover:cursor-pointer flex flex-col items-center align-middle justify-center w-45% bg-white hover:bg-gray-100 transform hover:translate-y-1 hover:shadow-md text-gray-800 font-bold py-4 px-8 rounded-lg m-4 text-2xl"
      >
        <MdNewspaper size="60%" className="text-xl" />
        <p>Kárdex Gráfico</p>
      </div>
    </div>
  );
};

export default Kárdex;
