"use client";

import { useState } from 'react';
import BusquedaMateriales from '../../components/BusquedaMateriales';

import dynamic from 'next/dynamic'; // Importa dynamic de next/dynamic para cargar BusquedaMateriales dinámicamente

const DynamicBusquedaMateriales = dynamic(() => import('../../components/BusquedaMateriales'), {
  ssr: false // Marca el componente para no ser renderizado en el servidor
});



export default function MaterialesPage() {
  return (
    <section className="flex align-center justify-center bg-[#FFF8F0]">
      <div className="block mt-4">

        <BusquedaMateriales />
        
        <div className="absolute aling-center bottom-10 bg-[#80B48B] hover:bg-[#6C9675] focus:outline-none focus:bg-green-300 rounded-md py-2 px-4">
          <a href="./subir-material" className="text-white">Subir nuevo material</a>
        </div>
        
        
            
          
      </div>
    </section>
  );
}
