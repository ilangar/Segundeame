"use client"


import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 right-0">
      <button
        className="text-black focus:outline-none"
        onClick={toggleMenu}
      >
        <img className="h-6 w-6 m-4" src="./menu-hamburguesa.png" alt="Icono del menu hamburguesa" />
      </button>
      {isOpen && (
        <div className="bg-green-200 absolute top-full right-0 ">
          <a href="./materiales" className="block text-black py-4 px-6 mr-8">Materiales</a>
          <a href="#" className="block text-black py-4 px-6">IA</a>
          <a href="#" className="block text-black py-4 px-6">ONGs</a>
          <a href="#" className="block text-black py-4 px-6">Fotos</a>
          <a href="#" className="block text-black py-4 px-6">Ayuda</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
