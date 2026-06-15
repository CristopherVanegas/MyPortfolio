import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = ({ hero }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.description}>{hero.description}</p>

        <div className={styles.socialLinks}>
          <a
            href="mailto:cristopher.vanegas.21@gmail.com"
            className={styles.ImgButton}
          >
            <img src={getImageUrl('skills/gmail.png')} alt="" />
          </a>
          <a
            href="https://github.com/CristopherVanegas"
            className={styles.ImgButton}
          >
            <img src={getImageUrl('skills/github.png')} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/cristopher-vanegas-santi-464a2b202"
            className={styles.ImgButton}
          >
            <img src={getImageUrl('skills/linkedin.png')} alt="" />
          </a>
        </div>
      </div>
      <img
        src={getImageUrl('hero/me_hero.jpg')}
        className={styles.heroImg}
        alt={hero.imageAlt}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
