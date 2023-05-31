import React, { useState, ChangeEvent, FormEvent } from "react";

const AccountForm: React.FC = () => {
  const [name, setName] = useState("");
  const [lastname1, setLastname1] = useState("");
  const [lastname2, setLastname2] = useState("");
  const [NoControl, setNoControl] = useState("");
  const [semestre, setSemestre] = useState("");
  const [carrera, setCarrera] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* name field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChangeName}
          className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      {/* lastname1 field */}
      <div className="mb-4">
        <label htmlFor="lastname1" className="block text-sm font-medium text-gray-700">
          Apellido paterno:
        </label>
        <input
          type="text"
          id="lastname1"
          value={lastname1}
          onChange={(e) => {
            setLastname1(e.target.value);
          }}
          className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      {/* lastname2 field */}
      <div className="mb-4">
        <label htmlFor="lastname1" className="block text-sm font-medium text-gray-700">
          Apellido materno:
        </label>
        <input
          type="text"
          id="lastname2"
          value={lastname2}
          onChange={(e) => {
            setLastname2(e.target.value);
          }}
          className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      {/* NoControl field */}
      <div className="mb-4">
        <label htmlFor="NoControl" className="block text-sm font-medium text-gray-700">
          Numero de control:
        </label>
        <input
          type="text"
          id="NoControl"
          value={NoControl}
          onChange={(e) => {
            setNoControl(e.target.value);
          }}
          className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      {/* semestre field */}
      <div className="mb-4">
        <label htmlFor="semestre" className="block text-sm font-medium text-gray-700">
          Semestre:
        </label>
        <input
          type="text"
          id="semestre"
          value={semestre}
          onChange={(e) => {
            setSemestre(e.target.value);
          }}
          className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      {/* carrera select field */}
      <div className="mb-4">
        <label htmlFor="carrera" className="block text-sm font-medium text-gray-700">
          Carrera:
        </label>
        <select
          id="carrera"
          value={carrera}
          onChange={(e) => {
            setCarrera(e.target.value);
          }}
          className="mt-1 block w-64 pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-transparent sm:text-sm"
          required
        >
          <option value="">Selecciona una carrera</option>
          <option value="Ing. Sistemas Computacionales">Ing. Sistemas Computacionales</option>
          <option value="Ing. Informatica">Ing. Informatica</option>
          <option value="Ing. Electronica">Ing. Electronica</option>
          <option value="Ing. Mecatronica">Ing. Mecatronica</option>
        </select>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Guardar
      </button>
    </div>
  );
};

export default AccountForm;
