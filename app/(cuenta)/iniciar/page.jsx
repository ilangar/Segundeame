"use client";

import { useState } from "react";

export default function IniciarCuenta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex align-center justify-center bg-[#FFF8F0] h-full">
      <div className="flex gap-8 mt-40">
        <form action="" className="flex flex-col gap-4">
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
            value="Inisiar sesión" 
            className="p-3 bg-[#80B48B] text-white rounded-lg cursor-pointer hover:bg-[#6C9675]"
            />
        </form>
      </div>
    </section>
  );
}
