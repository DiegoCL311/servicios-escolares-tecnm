import useSWRImmutable from "swr/immutable";
import fetcherBLOB from "@/lib/fetcherBLOB";

const useConstanciaEstudios = () => {
  const { data, error, isLoading } = useSWRImmutable(`/api/kardex/lista`, fetcherBLOB);

  return {
    data,
    isLoading,
    error,
  };
};

export default useConstanciaEstudios;
