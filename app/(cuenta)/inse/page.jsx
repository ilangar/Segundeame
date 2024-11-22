"use client";

import { useState } from "react";

export default function IniciarCuenta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 rounded-lg">
        <form className="flex flex-col gap-4">
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
        <a href="./crear" className="flex items-center justify-center mt-3 text-sm underline text-center">¿No tienes una cuenta?¡Create una!</a>
      </div>
    </section>
  );
}
