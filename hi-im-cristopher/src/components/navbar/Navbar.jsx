import React, { useState } from "react";

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>cristopher.codes</a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={ 
                    menuOpen
                      ? getImageUrl("nav/closeIcon.png")
                      : getImageUrl("nav/menuIcon.png")
                }
                onClick={() => setMenuOpen(!menuOpen)}
                alt={
                    menuOpen
                    ? "close-menu-button"
                    : "menu-button"
                } />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)} >
                <li><a href="#about">Acerca de mi</a></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </div>
    </nav>
  )
}
