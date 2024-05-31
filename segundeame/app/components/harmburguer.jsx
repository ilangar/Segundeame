"use client"

import React, { useState } from 'react';
import styles from '../globals.css';

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