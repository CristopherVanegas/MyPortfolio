import styles from './Contact.module.css'

import { getImageUrl } from '../../utils'

export const Contact = ({ contact }) => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>{contact.title}</h2>
        <p>{contact.description}</p>
      </div>
      <div className={styles.contact}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl('contact/emailIcon.png')} alt={contact.emailAlt} />
            <a href="mailto:cristopher.platzi@gmail.com">cristopher.platzi@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl('contact/linkedinIcon.png')} alt={contact.linkedinAlt} />
            <a href="https://www.linkedin.com/in/cristopher-vanegas-santi-464a2b202/">
              Cristopher Vanegas
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl('contact/githubIcon.png')} alt={contact.githubAlt} />
            <a href="https://github.com/CristopherVanegas">CristopherVanegas</a>
          </li>
        </ul>
        <img
          src={getImageUrl('hero/me_hero.jpg')}
          className={styles.heroImg}
          alt={contact.heroAlt}
        />
      </div>
    </footer>
  )
}
