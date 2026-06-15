import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = ({ about }) => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{about.title}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/yo_programando.png')}
          alt={about.imageAlt}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {about.items.map((item) => (
            <li className={styles.aboutItem} key={item.title}>
              <img src={getImageUrl(item.icon)} alt={item.iconAlt} />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
