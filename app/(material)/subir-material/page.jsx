"use client";

import { useState } from 'react';

export default function SubirMaterialesPage() {
    const [iDUser, setIDUser] = useState(3); // Asumiendo un valor fijo para el usuario
    const [material, setMaterial] = useState('');
    const [caracteristicas, setCaracteristicas] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState(null);
    const [foto, setFoto] = useState(null); // Para manejar la imagen seleccionada

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('iDUser', iDUser);
        formData.append('material', material);
        formData.append('caracteristicas', caracteristicas);
        formData.append('email', email);
        formData.append('telefono', telefono);

        console.log(telefono);
        // Adjuntar archivo si existe
        if (foto) {
            formData.append('file', foto); // 'file' es el nombre esperado por el backend
        }
        console.log(foto);
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
        <main className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex gap-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Sección de carga de imagen */}
                    <label className="flex flex-col items-center justify-center w-64 h-64 border-2 border-dashed border-[#80B48B] rounded-lg text-[#80B48B] text-center cursor-pointer">
                        <img src="/icons/plus-icon.png" alt="Agregar foto" className="w-12 mb-4" />
                        <span className="font-semibold mb-1">Agregar foto</span>
                        <span className="text-gray-500">Sólo una foto</span>
                        <input 
                            type="file" 
                            accept="image/*" 
                            multiple 
                            onChange={(e) => setFoto(e.target.files[0])} 
                            className="hidden" 
                        />
                    </label>

                    {/* Campos de entrada de texto */}
                    <input 
                        type="text" 
                        required 
                        placeholder="Título *" 
                        value={material} 
                        onChange={(e) => setMaterial(e.target.value)}
                        className="p-3 border border-[#80B48B] rounded-lg"
                    />
                    <input 
                        type="text" 
                        required 
                        placeholder="Descripción *" 
                        value={caracteristicas}
                        onChange={(e) => setCaracteristicas(e.target.value)}
                        className="p-3 border border-[#80B48B] rounded-lg"
                    />
                    <input 
                        type="email" 
                        required 
                        placeholder="Email *" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 border border-[#80B48B] rounded-lg"
                    />
                    <input 
                        type="tel" 
                        placeholder="Número de teléfono" 
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        className="p-3 border border-[#80B48B] rounded-lg"
                    />
                    <input 
                        type="submit" 
                        value="Subir material" 
                        className="p-3 bg-[#80B48B] text-white rounded-lg cursor-pointer hover:bg-[#6C9675]"
                    />
                </form>
            </div>
        </main>
    );
}
