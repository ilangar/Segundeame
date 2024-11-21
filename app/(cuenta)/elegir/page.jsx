"use client";

export default function Elegir() {
  return (
    <section className="flex align-center justify-center bg-[#FFF8F0] h-full ">
        <div className="absolute aling-center bottom-10 bg-[#80B48B] hover:bg-[#6C9675] focus:outline-none focus:bg-green-300 rounded-md py-2 px-4">
          <a href="./crear" className="text-white">Crear cuanta</a>
        </div>
        <div className="absolute aling-center bottom-40 bg-[#80B48B] hover:bg-[#6C9675] focus:outline-none focus:bg-green-300 rounded-md py-2 px-4">
          <a href="./iniciar" className="text-white">Iniciar cuanta</a>
        </div>
    </section>
 );
}