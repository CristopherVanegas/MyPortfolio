import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Cristopher</h1>
        <p className={styles.description}>
          {
            " > Desarrollador FullStack con experiencia en sistemas ERP & CRM, apasionado por la IA y la programación de sistemas embebidos."
          }
        </p>
        <a
          href="mailto:cristopher.vanegas.21@gmail.com"
          className={styles.contactBtn}
        >
          Contáctame
        </a>
      </div>
      <img
        src={getImageUrl("hero/me_hero.jpg")}
        className={styles.heroImg}
        alt="Hero Image of me"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
