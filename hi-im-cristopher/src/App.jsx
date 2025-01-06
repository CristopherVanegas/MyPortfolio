import styles from './App.module.css';
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import VerticalSlider from './components/VerticalSlider/VerticalSlider';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects />
      <Contact />
      <VerticalSlider />
    </div>
  )
}

export default App
