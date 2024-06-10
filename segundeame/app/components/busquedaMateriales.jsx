"use client" 

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
    <div className="flex align-center justify-center mt-10">
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input type="text" 
            placeholder="Buscar materiales..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-[#80B48B] rounded-md py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            type="submit"
            className="bg-[#80B48B] text-white rounded-md py-2 px-4 hover:bg-green-300 focus:outline-none focus:bg-green-300">
          Buscar</button>
        </form>
    </div>
   
  )
}

export default BusquedaMateriales;