"use client";

import { useState } from 'react';
import BusquedaMateriales from '../../components/BusquedaMateriales';

import dynamic from 'next/dynamic'; // Importa dynamic de next/dynamic para cargar BusquedaMateriales dinámicamente

const DynamicBusquedaMateriales = dynamic(() => import('../../components/BusquedaMateriales'), {
  ssr: false // Marca el componente para no ser renderizado en el servidor
});

const materiales = [
  { material: "carton", caracteristicas: " es fuerte"},
  { material: "metal", caracteristicas: " es mas fuerte"},
  { material: "carton", caracteristicas: " es super"},
  { material: "carton", caracteristicas: " es fuerte"},
  { material: "carton", caracteristicas: " es fuerte"}
]
  

export default function MaterialesPage() {
  return (
    <section className="flex align-center justify-center">
      <div className="flex align-center justify-center">

        <BusquedaMateriales />
        
        <div className="absolute aling-center bottom-10 bg-[#80B48B] hover:bg-[#6C9675] focus:outline-none focus:bg-green-300 rounded-md py-2 px-4">
          <a href="./subir-material" className="text-white">Subir nuevo material</a>
        </div>
        <div>
          {
            materiales.map((material, index) =>(
              <div className="bg-lightgreen text-white m-4 p-2 rounded-full inline-block flex items-center">
                <span className="ml-4">{material.material} </span>
                <span>{material.caracteristicas}</span>
              </div>        
              )) 
          }
        </div>
        
            
          
      </div>
    </section>
  );
}
