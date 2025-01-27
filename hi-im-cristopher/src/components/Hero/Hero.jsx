import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, soy Cristopher</h1>
            <p className={styles.description}>Soy un desarrollador full stack con 3 años de experiencia en .NET y SQL Server.</p>
            <a href="mailto:cristopher.vanegas.21@gmail.com" className={styles.contactBtn}>Contáctame</a>
        </div>
        <img src={ getImageUrl("hero/me_hero.jpg") } className={styles.heroImg} alt="Hero Image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
