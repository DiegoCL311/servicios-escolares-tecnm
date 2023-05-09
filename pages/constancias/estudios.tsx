import useConstanciaEstudios from "@/hooks/useConstanciaEstudio";
import React, { useEffect } from "react";
import Loading from "@/components/Loading";

interface ConstanciaEstudiosProps {}

const ConstanciaEstudios: React.FC<ConstanciaEstudiosProps> = ({}) => {
  const [pdfUrl, setPdfUrl] = React.useState("");

  const { data: constanciaEstudiosData, isLoading } = useConstanciaEstudios();

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
