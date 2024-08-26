"use client";
import { useState, useEffect } from 'react';

const BusquedaMateriales = ({ setMateriales }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [materiales, setMaterialesLocal] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('Término de búsqueda actual:', event.target.value); // Verifica el término de búsqueda
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

      console.log('Datos recibidos de la API:', data); // Verifica los datos recibidos de la API

      // Adaptar la lógica para manejar la estructura { message: Array }
      if (data && Array.isArray(data.message)) {
        setMaterialesLocal(data.message);
      } else {
        setMaterialesLocal([]); // Si la estructura no es la esperada, lo dejamos vacío
      }

      // Verifica el contenido de materiales después de actualizar el estado
      console.log('Materiales almacenados en el estado:', materiales);

    } catch (error) {
      console.error('Error al obtener los materiales:', error);
      setMaterialesLocal([]); // En caso de error, asegura que `materiales` sea un array vacío
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchMateriales();
    }
  }, []);

  return (
    <div className="flex align-center justify-center top-8">
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
        {Array.isArray(materiales) && materiales.length > 0 ? (
          materiales.filter(material => 
            material.material?.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((material) => (
            <div key={material.iDMaterial} className="border p-4 mb-2">
              <h2>{material.material}</h2>
              <p>{material.caracteristicas}</p>
              <img src={material.fotoUrl} alt={material.material} />
              <p>{material.email}</p>
              <p>{material.telefono}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron materiales.</p> // Muestra este mensaje si no hay materiales para mostrar
        )}
      </div>
    </div>
  );
}

export default BusquedaMateriales;
