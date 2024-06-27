"use client";

import { useState } from 'react';

export default function SubirMaterialesPage() {
    const [iDUser, setIDUser] = useState(3);  // Asumiendo un valor fijo para el usuario
    const [material, setMaterial] = useState('');
    const [caracteristicas, setCaracteristicas] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fotoUrl, setFotoUrl] = useState(''); // Asumiendo una URL de imagen fija

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            iDUser,
            material,
            caracteristicas,
            fotoUrl,
            email,
            telefono
        };

        try {
            const response = await fetch('http://localhost:3000/api/materiales/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main className="">
            <div className="flex align-center justify-center w-full flex-col overflow-hidden">
                <form onSubmit={handleSubmit} className="flex align-center justify-center">
                    <fieldset className="flex align-center justify-center flex-col gap-y-2">
                        <label className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                            Imagen (máximo 10)*
                            <input 
                                type="file" 
                                accept="image/*" 
                                multiple 
                                className="cursor-pointer" 
                                onChange={(e) => setFotoUrl('prueba')} // Aquí deberías manejar la subida de imágenes
                            />
                        </label>
                        <label className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                            <input 
                                type="text" 
                                required 
                                placeholder="Materiales*" 
                                className="" 
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
                            />
                        </label>
                        <div className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                            <label className="block">Contacto:</label>
                            <div className="block">
                                <label className="block">
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder="Email*" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                <label className="block">
                                    <input 
                                        type="tel" 
                                        placeholder="Telefono" 
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <input 
                            type="submit" 
                            value="Subir material" 
                            className=" text-white flex align-center justify-center bg-[#80B48B] hover:bg-[#6C9675] cursor-pointer rounded-md py-2 px-4" 
                        />
                    </fieldset>
                </form>
            </div>
        </main>
    );
}
