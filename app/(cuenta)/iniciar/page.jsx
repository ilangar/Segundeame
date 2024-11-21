"use client";

export default function IniciarCuenta() {
  return (
    <section className="flex align-center justify-center bg-[#FFF8F0] h-full ">
      <div className="">

      <form action="">
          <input 
            type="email" 
            required 
            placeholder="Email *" 
            value={}
            className="p-3 border border-[#80B48B] rounded-lg"/>
          <input 
            type="password" 
            required 
            placeholder="Contraseña *" 
            value={}
            className="p-3 border border-[#80B48B] rounded-lg"/>
        </form>

      </div>
    </section>
  );
}
