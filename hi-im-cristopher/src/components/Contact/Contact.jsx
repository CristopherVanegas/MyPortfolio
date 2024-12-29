import React from 'react'

import styles from './Contact.module.css';

import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contáctame</h2>
            <p>¡Hablemos y construyamos juntos el futuro de tu negocio!</p>
        </div>
        <div className={styles.contact}>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="my email" />
                    <a href="mailto:cristopher.platzi@gmail.com">cristopher.platzi@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="my linkedin" />
                    <a href="https://www.linkedin.com/in/cristopher-vanegas-464a2b202/">Cristopher Vanegas</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="my github" />
                    <a href="https://github.com/CristopherVanegas">CristopherVanegas</a>
                </li>
            </ul>
            <img src={ getImageUrl("hero/me_hero.jpg") } className={styles.heroImg} alt="Hero Image of me" />
        </div>
    </footer>
  )
}
