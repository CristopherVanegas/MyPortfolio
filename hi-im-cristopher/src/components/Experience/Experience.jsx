import { useEffect, useState } from "react";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export default function Experience() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % history.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? history.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.experience} id="experience">
      <h2>Experience</h2>

      <div className={styles.slider}>
        <button onClick={prev} className={styles.navBtn}>‹</button>

        <div className={styles.track}>
          {history.map((job, i) => {
            let position = styles.card;

            if (i === index) position += ` ${styles.active}`;
            else if (i === (index - 1 + history.length) % history.length)
              position += ` ${styles.prev}`;
            else if (i === (index + 1) % history.length)
              position += ` ${styles.next}`;

            return (
              <div className={position} key={i}>
                <h3>{job.role}</h3>
                <span className={styles.company}>{job.organisation}</span>
                <span className={styles.date}>
                  {job.startDate} – {job.endDate}
                </span>

                <ul>
                  {job.experiences.slice(0, 4).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <button onClick={next} className={styles.navBtn}>›</button>
      </div>
    </section>
  );
}
