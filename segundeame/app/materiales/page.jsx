import React from 'react';
import BusquedaMateriales from '../components/busquedaMateriales';

export default function MaterialesPage (){

    const handleSearch = () => {
        return
    }

    return(
        <html lang="es">
            <div>
                {/* <BusquedaMateriales onSearch={handleSearch} /> */}
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="absolute align-center justify-center bottom-10 bg-green-200">
                <a href="./subir-material" className="text-white align-center justify-center">Subir nuevo material +</a>
            </div>
        </html>
        
        
    )
}
