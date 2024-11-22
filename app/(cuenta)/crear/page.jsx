"use client";

import { useState } from "react";

export default function CrearCuenta() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(""); // Para mostrar mensajes al usuario

  const manejarEnvio = async (e) => {
    e.preventDefault(); // Evitar que la página recargue

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          email,
          telefono,
          contrasena: password, // Asegúrate de usar el mismo nombre que en tu back-end
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMensaje(data.message);
        console.log("Usuario:", data.usuario);
      } else {
        setMensaje(data.error || "Ocurrió un error.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMensaje("Error al conectar con el servidor.");
    }
  };

  return (
    <section className="flex align-center justify-center bg-[#FFF8F0] h-full">
      <div className="flex gap-8">
        <form onSubmit={manejarEnvio} className="flex flex-col gap-4">
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
        {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
      </div>
    </section>
  );
}
