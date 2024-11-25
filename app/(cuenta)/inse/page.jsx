"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Para redirigir a otra página

export default function IniciarCuenta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(""); // Para mostrar errores o éxito
  const router = useRouter();

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/iniciarSesion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          contrasena: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje("Inicio de sesión exitoso");
        console.log("Usuario:", data.usuario);
        router.push("/"); // Redirige a la página de inicio
      } else {
        setMensaje(data.error || "Ocurrió un error.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMensaje("Error al conectar con el servidor.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 rounded-lg">
        <form onSubmit={manejarEnvio} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 text-sm border border-[#80B48B] rounded focus:outline-none focus:ring-2 focus:ring-[#80B48B] shadow-md"
          />
          <input
            type="password"
            required
            placeholder="Contraseña*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 text-sm border border-[#80B48B] rounded focus:outline-none focus:ring-2 focus:ring-[#80B48B] shadow-md"
          />
          <button
            type="submit"
            className="w-full bg-[#80B48B] text-white py-2 rounded hover:bg-[#6A9B74] transition duration-300 shadow-md"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-red-500">{mensaje}</p>
        <a
          href="./crear"
          className="flex items-center justify-center mt-3 text-sm underline text-center"
        >
          ¿No tienes una cuenta? ¡Crea una!
        </a>
      </div>
    </section>
  );
}
