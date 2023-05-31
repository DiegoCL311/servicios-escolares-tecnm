import useKardexLista from "@/hooks/useKardexLista";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";

interface KardexListaProps {}

const KardexLista: React.FC<KardexListaProps> = ({}) => {
  const router = useRouter();
  const [pdfUrl, setPdfUrl] = useState("");

  console.log("kardexLista");
  const { data: cuenta, isLoading: UserLoading } = useCurrentUser();
  const { data: kardexListaData, isLoading } = useKardexLista();

  if (!cuenta && !UserLoading) {
    router.push("/login");
  }

  useEffect(() => {
    try {
      kardexListaData && setPdfUrl(URL.createObjectURL(kardexListaData));
    } catch (error) {
      console.log(error);
    }
  }, [kardexListaData]);

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

export default KardexLista;
