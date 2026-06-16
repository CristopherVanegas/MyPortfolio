import { useEffect, useId, useRef, useState } from 'react'
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { getImageUrl } from '../../utils'

const EXPERIENCE_MOBILE_MAX_WIDTH = 830
const MOBILE_BREAKPOINT = `(max-width: ${EXPERIENCE_MOBILE_MAX_WIDTH}px)`
const DESKTOP_HISTORY_BREAKPOINT = EXPERIENCE_MOBILE_MAX_WIDTH + 1
const SKILL_GROUPS = [
  {
    key: 'frontend',
    items: ['HTML', 'CSS', 'TypeScript', 'React', 'Angular'],
  },
  {
    key: 'backend',
    items: ['Node', '.NET Core', 'SQL Server', 'Python', 'Laravel PHP'],
  },
  {
    key: 'automation',
    items: ['n8n', 'AppSheets', 'Odoo'],
  },
  {
    key: 'tools',
    items: ['Git', 'Figma'],
  },
]

export const Experience = ({ experience }) => {
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null)
  const triggerRef = useRef(null)
  const closeButtonRef = useRef(null)
  const modalRef = useRef(null)
  const dialogId = useId()
  const dialogTitleId = `${dialogId}-title`
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

    const focusableSelector =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedHistoryItem(null)
        return
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return
      }

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll(focusableSelector),
      )

      if (focusableElements.length === 0) {
        event.preventDefault()
        return
      }

      const firstFocusable = focusableElements[0]
      const lastFocusable = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault()
        lastFocusable.focus()
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault()
        firstFocusable.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      if (triggerRef.current && document.contains(triggerRef.current)) {
        triggerRef.current.focus()
      }
    }
  }, [selectedHistoryItem])

  const openModal = (historyItem, event) => {
    triggerRef.current = event.currentTarget
    setSelectedHistoryItem(historyItem)
  }

  const closeModal = () => {
    setSelectedHistoryItem(null)
  }

  const groupedSkills = SKILL_GROUPS.map((group) => ({
    key: group.key,
    title: experience.technologyGroups[group.key],
    skills: skills.filter((skill) => group.items.includes(skill.title)),
  })).filter((group) => group.skills.length > 0)

  const renderHistoryHeader = (historyItem, centered = false) => (
    <div className={`${styles.historyHeader} ${centered ? styles.historyHeaderCentered : ''}`}>
      <img
        className={styles.historyLogo}
        src={getImageUrl(historyItem.imageSrc)}
        alt={`${historyItem.organisation} logo`}
      />

      <div className={`${styles.historyHeading} ${centered ? styles.historyHeadingCentered : ''}`}>
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

          <div className={styles.skillGroups}>
            {groupedSkills.map((group) => (
              <section key={group.key} className={styles.skillGroup}>
                <h4 className={styles.skillGroupTitle}>{group.title}</h4>

                <div className={styles.skillsGrid}>
                  {group.skills.map((skill, id) => (
                    <div key={`${group.key}-${id}`} className={styles.skillCard}>
                      <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <article className={`${styles.panel} ${styles.jobsPanel}`}>
          <div className={`${styles.panelHeader} ${styles.jobsHeader}`}>
            <p className={styles.eyebrow}>Career</p>
            <h3 className={styles.panelTitle}>{experience.jobsTitle}</h3>
          </div>

          <Swiper
            className={styles.history}
            modules={[Navigation]}
            navigation={true}
            preventClicks={true}
            preventClicksPropagation={true}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              [DESKTOP_HISTORY_BREAKPOINT]: {
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
                    onClick={(event) => openModal(historyItem, event)}
                    aria-haspopup="dialog"
                    aria-controls={dialogId}
                    aria-expanded={selectedHistoryItem === historyItem}
                    aria-label={`${historyItem.role} - ${historyItem.organisation}`}
                  >
                    {renderHistoryHeader(historyItem, true)}
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
            id={dialogId}
            ref={modalRef}
            className={styles.modalCard}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label={experience.modalClose}
            >
              x
            </button>

            <div id={dialogTitleId}>{renderHistoryHeader(selectedHistoryItem)}</div>
            {renderHistoryDetails(selectedHistoryItem)}
          </div>
        </div>
      ) : null}
    </section>
  )
}
