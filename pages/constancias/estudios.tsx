import useConstanciaEstudios from "@/hooks/useConstanciaEstudio";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";

interface ConstanciaEstudiosProps {}

const ConstanciaEstudios: React.FC<ConstanciaEstudiosProps> = ({}) => {
  const router = useRouter();
  const [pdfUrl, setPdfUrl] = useState("");

  console.log("ConstanciaEstudios");
  const { data: cuenta, isLoading: UserLoading } = useCurrentUser();
  const { data: constanciaEstudiosData, isLoading } = useConstanciaEstudios();

  if (!cuenta && !UserLoading) {
    router.push("/login");
  }

  useEffect(() => {
    try {
      constanciaEstudiosData && setPdfUrl(URL.createObjectURL(constanciaEstudiosData));
    } catch (error) {
      console.log(error);
    }
  }, [constanciaEstudiosData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="h-full">
        <iframe src={pdfUrl} width="100%" height="1200px" title="PDF Viewer" />{" "}
      </div>
    </div>
  );
};

export default ConstanciaEstudios;
