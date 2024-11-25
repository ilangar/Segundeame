"use client";
import { useState, useEffect } from 'react';

const BusquedaMateriales = ({ setMateriales }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [materiales, setMaterialesLocal] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('Término de búsqueda actual:', event.target.value);
  };
 
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchMateriales();
  };

  const fetchMateriales = async () => {
    try {
      const response = await fetch('/api/materiales/ver/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ busqueda: searchTerm }),
      });
      const data = await response.json();

      console.log('Datos recibidos de la API:', data);

      // Accede al array dentro de `message`
      if (data && Array.isArray(data.message)) {
        setMaterialesLocal(data.message);
      } else {
        setMaterialesLocal([]);
      }

      console.log('Materiales almacenados en el estado:', materiales);

    } catch (error) {
      console.error('Error al obtener los materiales:', error);
      setMaterialesLocal([]);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchMateriales();
    }
  }, []);

  return (
    <div className="flex align-center items-center top-20">
      <form onSubmit={handleSearchSubmit} className="flex align-center items-center">
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

      <div className="top-24 flex align-center items-center mt-4 w-full max-w-[90%] md:max-w-[75%] lg:max-w-[60%] max-h-[425px] overflow-y-auto]">
        {Array.isArray(materiales) && materiales.length > 0 ? (
          materiales.map((material) => (
            <div key={material.iDMaterial} className="border p-4 mb-2">
              <h2 className="">{material.material}</h2>
              <p className="">{material.caracteristicas}</p>
              
              <p className="">{material.email}</p>
              <p className="">{material.telefono}</p>
            </div>
          ))
        ) : (
          <p className="bottom">No se encontraron materiales.</p>
        )}
      </div>
    </div>
  );
}

export default BusquedaMateriales;
