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
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.121 5.879a1 1 0 010 1.414L13.414 12l6.707 6.707a1 1 0 11-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.879 18.121a1 1 0 010-1.414L11.586 12 4.879 5.293a1 1 0 111.414-1.414l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0z"
            />
          )}
        </svg>
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