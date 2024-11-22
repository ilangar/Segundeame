"use client";

import { useState } from 'react';

export default function ONGs() {
  const [file, setFile] = useState(null);  // Estado para manejar el archivo seleccionado
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [iDUser, setIDUser] = useState(3);  // Asumiendo un valor fijo para el usuario

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);  // Almacena el archivo en el estado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData para enviar el archivo y los datos
    const formData = new FormData();
    formData.append('file', file);  // Añade el archivo al FormData
    formData.append('material', title);
    formData.append('caracteristicas', description);
    formData.append('email', email);
    formData.append('telefono', phone);
    formData.append('iDUser',iDUser)

    try {
      const response = await fetch('/api/ong/crear', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log('ONG creada exitosamente:', data.message);
      } else {
        console.error('Error creando ONG:', data.error);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full mt-16">
  <div className="flex flex-col md:flex-row items-start justify-center gap-12 w-full max-w-5xl">
    {/* Contenedor para subir la foto */}
    <div className="flex flex-col items-center border-2 border-dashed border-[#80B48B] rounded-lg p-6 w-72 h-64 relative">
      <div className="flex flex-col items-center">
        <div className="text-[#80B48B] text-3xl mb-2">+</div>
        <p className="text-[#4A4A4A] text-lg font-medium">Agregar foto</p>
      </div>
      <p className="text-sm text-[#4A4A4A] mt-2">Sólo una foto</p>
      <input
        type="file"
        accept="image/*"
        multiple={false}
        className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
      />
    </div>

    {/* Formulario */}
    <form className="flex flex-col gap-6 w-full max-w-sm">
      <input
        type="text"
        required
        placeholder="Título *"
        className="border border-[#80B48B] rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#80B48B] shadow-sm"
      />
      <input
        type="text"
        required
        placeholder="Descripción *"
        className="border border-[#80B48B] rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#80B48B] shadow-sm"
      />
      <input
        type="email"
        required
        placeholder="Email *"
        className="border border-[#80B48B] rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#80B48B] shadow-sm"
      />
      <input
        type="tel"
        placeholder="Número de teléfono"
        className="border border-[#80B48B] rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#80B48B] shadow-sm"
      />
      <input
        type="submit"
        value="Subir ONG"
        className="bg-[#80B48B] text-white font-semibold rounded-md p-3 cursor-pointer hover:bg-[#6C9675] transition-shadow duration-200 shadow-md"
      />
    </form>
  </div>
</main>

  );
}
