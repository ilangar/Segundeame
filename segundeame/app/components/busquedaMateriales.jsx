//FALTA CONECTARLO A LA BASE DE DATOS 


import React, { useState } from 'react';

const BusquedaMateriales = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Buscar materiales..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-green-200 rounded-md py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Buscar
      </button>
    </form>
  )
}

export default BusquedaMateriales;