"use client"


import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute right-0 top-0 z-49">
      <button className="" onClick={toggleMenu}>
        <img className="h-6 w-6 mt-5 mr-5" src="./menu-hamburguesa.png" alt="Icono del menu hamburguesa" />
      </button>
      {isOpen && (
        <div className="bg-[#2F653E] absolute top-full right-0 z-50">
          <a href="./materiales" className="block text-white py-4 px-6 mr-8 cursor-pointer hover:text-black">Materiales</a>
          <a href="./ia" className="block text-white py-4 px-6 cursor-pointer hover:text-black">IA</a>
          <a href="./ong" className="block text-white py-4 px-6 cursor-pointer hover:text-black">Proyecto</a>
          <a href="./inse" className="block text-white py-4 px-6 cursor-pointer hover:text-black">Perfil</a>
          <a href="./ayuda" className="block text-white py-4 px-6 cursor-pointer hover:text-black">Ayuda</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
