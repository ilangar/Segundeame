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

    <div className="flex flex-col items-center justify-center w-full">
      <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 w-[90%] max-w-3xl">
        <input
          type="text"
          placeholder="Buscar materiales..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-[#80B48B] rounded-l-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#6C9675] shadow-sm"
        />
        <button
          type="submit"
          className="bg-[#80B48B] text-white rounded-r-md py-2 px-4 hover:bg-[#6C9675] focus:outline-none focus:ring-2 focus:ring-[#6C9675] shadow-sm">
          Buscar
        </button>
      </form>

      <div className="flex items-center mt-6 w-full max-w-4xl overflow-hidden">
        
        <div className="flex items-center gap-4 w-full overflow-x-auto">
          {Array.isArray(materiales) && materiales.length > 0 ? (
            materiales.map((material) => (
              <div
                key={material.iDMaterial}
                className="flex flex-col items-center border rounded-lg p-4 w-[200px] h-[250px] shadow-sm bg-white"
              >
                <div className="w-full h-[150px] bg-gray-100 rounded-md mb-2">
                  <img
                    src={material.fotoUrl}
                    alt={material.material}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h2 className="text-center font-semibold text-[#4A4A4A]">
                  {material.material}
                </h2>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No se encontraron materiales.</p>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default BusquedaMateriales;
