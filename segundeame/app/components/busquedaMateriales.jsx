"use client";
import { useState, useEffect } from 'react';
import { GET } from "../api/materiales/ver/route";

const BusquedaMateriales = ({ setMateriales }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [materiales, setMaterialesLocal] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchMateriales();
  };

  const fetchMateriales = async () => {
    try {
      const response = await fetch('/api/materiales/ver/');
      const data = await response.json();
      setMateriales(data); // Actualiza el estado de materiales en MaterialesPage
      setMaterialesLocal(data); // Actualiza localmente en BusquedaMateriales
    } catch (error) {
      console.error('Error al obtener los materiales:', error);
    }
  };

  async function fetchDataAndLog() {
    try {
      const info = await GET("metal");
      console.log('Respuesta de GET:', info);

      const infoString = JSON.stringify(info);
      console.log(infoString);
      return infoString;
    } catch (error) {
      console.error('Error al obtener información:', error);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchMateriales();
    }
  }, []);

  return (
    <div className="flex align-center justify-center mt-10">
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Buscar materiales..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-[#80B48B] rounded-md py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-[#6C9675] drop-shadow-md"
        />
        <button
          type="submit"
          className="bg-[#80B48B] text-white rounded-md py-2 px-4 hover:bg-[#6C9675] focus:outline-none focus:bg-[#6C9675] drop-shadow-md">
          Buscar
        </button>
      </form>

      <div className="mt-4">
        {materiales.filter(material => material.material.toLowerCase().includes(searchTerm.toLowerCase())).map((material) => (
          <div key={material.iDMaterial} className="border p-4 mb-2">
            <h2>{material.material}</h2>
            <p>{material.caracteristicas}</p>
            <img src={material.fotoUrl} alt={material.material} />
            <p>{material.email}</p>
            <p>{material.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusquedaMateriales;

