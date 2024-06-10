import React from 'react';
import BusquedaMateriales from '../components/busquedaMateriales';

//FALTA  onSearch={handleSearch} EN BUSQUEDAMATERIALES
export default function MaterialesPage (){

    const handleSearch = () => {
        return
    }

    return(
        <section className="flex align-center justify-center">
            <div>
                <BusquedaMateriales /> 
                 
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="absolute align-center justify-center bottom-10 bg-[#80B48B] hover:bg-green-300 focus:outline-none focus:bg-green-300 rounded-md py-2 px-4">
                <a href="./subir-material" className=" text-black align-center justify-center m-4 ">Subir nuevo material</a>
            </div>
        </section>
        
        
    )
}
