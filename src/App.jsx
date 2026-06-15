import { useEffect, useState } from 'react'

import styles from './App.module.css'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { getSiteContent } from './data/siteContent'

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'es'
    }

    return window.localStorage.getItem('site-language') ?? 'es'
  })

  useEffect(() => {
    window.localStorage.setItem('site-language', language)
  }, [language])

  const content = getSiteContent(language)

  return (
    <div className={styles.App}>
      <Navbar language={language} onLanguageChange={setLanguage} nav={content.nav} />
      <Hero hero={content.hero} />
      <About about={content.about} />
      <Experience experience={content.experience} />
      <Projects projectsContent={content.projects} />
      <Contact contact={content.contact} />
    </div>
  )
}

export default App
