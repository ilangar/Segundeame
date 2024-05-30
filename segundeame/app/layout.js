import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Segundeame",
  description: "Segundeame es web que conecta a los usuarios interesados en darle una segunda oportunidad a materiales y objetos. Tiene como objetivo abordar el problema de la cantidad de basura que podría tener un segundo uso pero que a menudo se desecha"
};



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button onClick={toggleMenu} className={styles.hamburgerButton}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      {isOpen && (
        <div className={styles.menu}>
          {/* Aquí puedes agregar tus opciones de menú */}
          <a href="#">Inicio</a>
          <a href="#">Acerca de</a>
          {/* Agrega más opciones aquí */}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;