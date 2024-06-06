"use client"


import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="absolute right-0">

      <button
        className="text-black focus:outline-none focus:text-black"
        onClick={toggleMenu}
      >
        <img className="h-6 w-6" src="./menu-hamburguesa.png" alt="Icono del menu hamburguesa" />
      </button>
      {isOpen && (
        <div className="bg-green-200">
          <a href="./materiales" className="block text-black py-2 px-4">Materiales</a>
          <a href="#" className="block text-black py-2 px-4">IA</a>
          <a href="#" className="block text-black py-2 px-4">ONGs</a>
          <a href="#" className="block text-black py-2 px-4">Fotos</a>
          <a href="#" className="block text-black py-2 px-4">Ayuda</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;