import { useEffect, useState } from 'react'
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { getImageUrl } from '../../utils'

const MOBILE_BREAKPOINT = '(max-width: 830px)'

export const Experience = ({ experience }) => {
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia(MOBILE_BREAKPOINT).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT)
    const handleViewportChange = (event) => {
      setIsMobile(event.matches)
    }

    setIsMobile(mediaQuery.matches)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleViewportChange)
      return () => mediaQuery.removeEventListener('change', handleViewportChange)
    }

    mediaQuery.addListener(handleViewportChange)
    return () => mediaQuery.removeListener(handleViewportChange)
  }, [])

  useEffect(() => {
    if (!isMobile && selectedHistoryItem) {
      setSelectedHistoryItem(null)
    }
  }, [isMobile, selectedHistoryItem])

  useEffect(() => {
    if (!selectedHistoryItem) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedHistoryItem(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedHistoryItem])

  const closeModal = () => {
    setSelectedHistoryItem(null)
  }

  const renderHistoryHeader = (historyItem) => (
    <div className={styles.historyHeader}>
      <img
        className={styles.historyLogo}
        src={getImageUrl(historyItem.imageSrc)}
        alt={`${historyItem.organisation} logo`}
      />

      <div className={styles.historyHeading}>
        <h3>{historyItem.role}</h3>
        <p className={styles.organisation}>{historyItem.organisation}</p>
        <p className={styles.period}>
          {historyItem.startDate} - {historyItem.endDate}
        </p>
      </div>
    </div>
  )

  const renderHistoryDetails = (historyItem) => (
    <ul className={styles.historyList}>
      {historyItem.experiences.map((experienceItem, experienceId) => (
        <li key={experienceId}>{experienceItem}</li>
      ))}
    </ul>
  )

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{experience.title}</h2>

      <div className={styles.content}>
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <p className={styles.eyebrow}>Stack</p>
            <h3 className={styles.panelTitle}>{experience.technologiesTitle}</h3>
            <p className={styles.panelDescription}>{experience.technologiesDescription}</p>
          </div>

          <div className={styles.skillsGrid}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skillCard}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </article>

        <article className={`${styles.panel} ${styles.jobsPanel}`}>
          <div className={styles.panelHeader}>
            <p className={styles.eyebrow}>Career</p>
            <h3 className={styles.panelTitle}>{experience.jobsTitle}</h3>
          </div>

          <Swiper
            className={styles.history}
            modules={[Navigation]}
            navigation={true}
            preventClicks={true}
            preventClicksPropagation={true}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              831: {
                spaceBetween: 24,
              },
            }}
          >
            {experience.history.map((historyItem, id) => (
              <SwiperSlide key={id}>
                {isMobile ? (
                  <button
                    type="button"
                    className={`${styles.historyCard} ${styles.historyCardInteractive}`}
                    onClick={() => setSelectedHistoryItem(historyItem)}
                    aria-haspopup="dialog"
                    aria-label={`${historyItem.role} - ${historyItem.organisation}`}
                  >
                    {renderHistoryHeader(historyItem)}
                  </button>
                ) : (
                  <div className={styles.historyCard}>
                    {renderHistoryHeader(historyItem)}
                    {renderHistoryDetails(historyItem)}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </div>

      {isMobile && selectedHistoryItem ? (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalCard}
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label={experience.modalClose}
            >
              x
            </button>

            <div id="experience-modal-title">{renderHistoryHeader(selectedHistoryItem)}</div>
            {renderHistoryDetails(selectedHistoryItem)}
          </div>
        </div>
      ) : null}
    </section>
  )
}
