
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Cristopher</h1>
        <p className={styles.description}>
          {
            " > Desarrollador FullStack con experiencia en desarrollo e integración de sistemas ERP & CRM, apasionado por la IA y la programación de sistemas embebidos."
          }
        </p>

        <div className={styles.socialLinks}>
          <a
            href="mailto:cristopher.vanegas.21@gmail.com"
            className={styles.ImgButton}
          >
            <img src={getImageUrl("skills/gmail.png")} alt="" />
          </a>
          <a
            href="https://github.com/CristopherVanegas"
            className={styles.ImgButton}
          >
            <img src={getImageUrl("skills/github.png")} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/cristopher-vanegas-santi-464a2b202"
            className={styles.ImgButton}
          >
            <img src={getImageUrl("skills/linkedin.png")} alt="" />
          </a>
        </div>
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
