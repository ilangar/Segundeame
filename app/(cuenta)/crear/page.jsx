"use client";

import { useState } from "react";

export default function CrearCuenta() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex align-center justify-center bg-[#FFF8F0] h-full">
      <div className="flex gap-8">
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Nombre *"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-3 border border-[#80B48B] rounded-lg"
          />
          <input
            type="text"
            required
            placeholder="Apellido *"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
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
            required
            placeholder="Teléfono *"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="p-3 border border-[#80B48B] rounded-lg"
          />
          <input
            type="password"
            required
            placeholder="Contraseña *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-[#80B48B] rounded-lg"
          />
          <input 
            type="submit" 
            value="Crear cuenta" 
            className="p-3 bg-[#80B48B] text-white rounded-lg cursor-pointer hover:bg-[#6C9675]"
            />
        </form>
      </div>
    </section>
  );
}
