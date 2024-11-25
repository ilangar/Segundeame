"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function IniciarCuenta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const router = useRouter();

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/iniciarSesion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contrasena: password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMensaje("Inicio de sesión exitoso");
        console.log("Usuario:", data.usuario);
        router.push("/dashboard"); // Redirige al dashboard o página principal
      } else {
        setMensaje(data.error || "Ocurrió un error.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMensaje("Error al conectar con el servidor.");
    }
  };

  return (
    <section className="flex align-center justify-center h-full">
      <div className="flex gap-8 mt-40">
        <form onSubmit={manejarEnvio} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value="Iniciar sesión"
            className="p-3 bg-[#80B48B] text-white rounded-lg cursor-pointer hover:bg-[#6C9675]"
          />
        </form>
        {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
      </div>
    </section>
  );
}
