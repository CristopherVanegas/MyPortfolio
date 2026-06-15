import { useState } from 'react'

import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

export const Navbar = ({ language, onLanguageChange, nav }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const isEnglish = language === 'en'

  const handleLanguageToggle = () => {
    onLanguageChange(isEnglish ? 'es' : 'en')
    setMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        cristopher.codes
      </a>
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{nav.about}</a>
          </li>
          <li>
            <a href="#experience">{nav.experience}</a>
          </li>
          <li>
            <a href="#projects">{nav.projects}</a>
          </li>
          <li>
            <a href="#contact">{nav.contact}</a>
          </li>
        </ul>

        <div className={styles.actions}>
          <div className={styles.languageSwitch}>
            <span className={styles.languageLabel}>{nav.language}</span>
            <button
              type="button"
              className={`${styles.languageButton} ${
                isEnglish ? styles.languageButtonActive : ''
              }`}
              onClick={handleLanguageToggle}
              aria-label={`${nav.language}: ${isEnglish ? 'English' : 'Español'}`}
              aria-pressed={isEnglish}
            >
              <span>ES</span>
              <span className={styles.languageDivider} />
              <span>EN</span>
            </button>
          </div>

          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl('nav/closeIcon.png')
                : getImageUrl('nav/menuIcon.png')
            }
            onClick={() => setMenuOpen(!menuOpen)}
            alt={menuOpen ? 'close-menu-button' : 'menu-button'}
          />
        </div>
      </div>
    </nav>
  )
}
