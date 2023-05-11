import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const Loading: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-6">
        <div className="text-2xl font-bold text-blue-500">Cargando...</div>
      </div>{" "}
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
