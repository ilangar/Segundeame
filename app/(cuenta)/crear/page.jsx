"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter

export default function CrearCuenta() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(""); // Para mostrar mensajes de error o éxito
  const router = useRouter(); // Inicializa useRouter

  const manejarEnvio = async (e) => {
    e.preventDefault(); // Evita que la página recargue

    // Validación de campos obligatorios
    if (!nombre || !apellido || !email || !password) {
      setMensaje("Por favor, completa todos los campos obligatorios.");
      return;
    }

    try {
      const response = await fetch("/api/crearCuenta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          email,
          telefono,
          contrasena: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(data.message); // Muestra el mensaje de éxito
        console.log("Usuario creado:", data.usuario);
        // Redirige a la carpeta "inse" si la cuenta se crea con éxito
        router.push("/inse");
      } else {
        setMensaje(data.error || "Ocurrió un error."); // Muestra el error si ocurre
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMensaje("Error al conectar con el servidor.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen  ">
      <div className="w-full max-w-md p-6">
        <form onSubmit={manejarEnvio} className="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Nombre*"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 text-sm border border-[#80B48B] rounded focus:outline-none focus:ring-2 focus:ring-[#80B48B] shadow-md"
          />
          <input
            type="text"
            required
            placeholder="Apellido*"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="w-full p-2 text-sm border border-[#80B48B] rounded focus:outline-none focus:ring-2 focus:ring-[#80B48B] shadow-md"
          />
          <input
            type="email"
            required
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 text-sm border border-[#80B48B] rounded focus:outline-none focus:ring-2 focus:ring-[#80B48B] shadow-md"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
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
            className="w-full bg-[#80B48B] text-white text-sm py-2 rounded hover:bg-[#6A9B74] transition duration-300 shadow-md"
          >
            Crear cuenta
          </button>
        </form>
        <a
          href="/inse"
          className="flex items-center justify-center mt-3 text-sm underline text-center"
        >
          ¿Tienes una cuenta? ¡Inicia sesión!
        </a>
        {mensaje && <p className="mt-4 text-center text-sm text-red-600">{mensaje}</p>}
      </div>
    </section>
  );
}
