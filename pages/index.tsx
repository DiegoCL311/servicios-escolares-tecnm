import GobNavbar from "@/components/GobNavbar";
import TecNMNavbar from "@/components/TecNMNavbar";
import Menu from "@/components/Menu";
import MyFooter from "@/components/MyFooter";

export default function Home() {
  const data = "";

  return (
    <>
      <GobNavbar></GobNavbar>
      <TecNMNavbar></TecNMNavbar>
      <Menu></Menu>
      <div className="h-[3999px] bg-gradient-to-b from-cyan-500 to-red-500"></div>
      <MyFooter></MyFooter>
    </>
  );
}
