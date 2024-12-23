import React from 'react';

import styles from './About.module.css'; 
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Acerca de mi</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/yo_programando.png")} alt="Yo programando" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Experiencia en creación de páginas responsive y SEO optimizado.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend developer</h3>
                        <p>Experiencia en creación de APIs optimizadas con .NET Core y manejo de bases de datos SQL y NoSQL.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Diseño UI</h3>
                        <p>Manejo de Figma para diseño de páginas web.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
