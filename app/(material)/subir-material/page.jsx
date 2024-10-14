"use client";

import { useState } from 'react';

export default function SubirMaterialesPage() {
    const [iDUser, setIDUser] = useState(3);  // Asumiendo un valor fijo para el usuario
    const [material, setMaterial] = useState('');
    const [caracteristicas, setCaracteristicas] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [foto, setFoto] = useState(null); // Para manejar la imagen seleccionada

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('iDUser', iDUser);
        formData.append('material', material);
        formData.append('caracteristicas', caracteristicas);
        formData.append('email', email);
        formData.append('telefono', telefono);
    
        // Adjuntar archivo si existe
        if (foto) {
            formData.append('file', foto); // 'file' es el nombre esperado por el backend
        }
    
        try {
            const response = await fetch('/api/materiales/crear', {
                method: 'POST',
                body: formData,
            });
    
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <main className="">
            <div className="mt-10 flex align-center justify-center w-full flex-col overflow-hidden">
                <form onSubmit={handleSubmit} className="flex align-center justify-center">
                    <fieldset className="flex align-center justify-center flex-col gap-y-2">
                        <label className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                            Imagen (máximo 10)*
                            <input 
                                type="file" 
                                accept="image/*" 
                                multiple 
                                className="cursor-pointer" 
                                onChange={(e) => setFoto(e.target.files[0])} // Manejo de la imagen seleccionada
                            />
                        </label>
                        <label className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                            <input 
                                type="text" 
                                required 
                                placeholder="Materiales*" 
                                value={material} 
                                onChange={(e) => setMaterial(e.target.value)}
                            />
                        </label>
                        <label className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                            <input 
                                type="text" 
                                required 
                                placeholder="Descripción*" 
                                value={caracteristicas}
                                onChange={(e) => setCaracteristicas(e.target.value)}
                                className="focus:outline-none"
                            />
                        </label>
                        <div className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                            <label className="block">Contacto:</label>
                            <div className="block">
                                <label className="block focus:outline-none">
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder="Email*" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="focus:outline-none"
                                    />
                                </label>
                                <label className="block">
                                    <input 
                                        type="tel" 
                                        placeholder="Telefono" 
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                        className="focus:outline-none"
                                    />
                                </label>
                            </div>
                        </div>
                        <input 
                            type="submit" 
                            value="Subir material" 
                            className="text-white bg-[#80B48B] hover:bg-[#6C9675] cursor-pointer rounded-md py-2 px-4"
                        />
                    </fieldset>
                </form>
            </div>
        </main>
    );
}
