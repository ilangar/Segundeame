"use client";

import BusquedaMateriales from "@/app/components/busquedaMateriales";

export default function MaterialesPage() {
  return (
    <section className="flex align-center justify-center bg-[#FFF8F0] h-full ">
      <div className="block mt-16">

        <BusquedaMateriales />

        <div className="absolute aling-center bottom-10 bg-[#80B48B] hover:bg-[#6C9675] focus:outline-none focus:bg-green-300 rounded-md py-2 px-4">
          <a href="./subir-material" className="text-white">Subir nuevo material</a>
        </div>

      </div>
    </section>
  );
}
