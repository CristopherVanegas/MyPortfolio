import React from "react";
import { useState } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projects}>
        <button className={styles.navButton} onClick={prevProject}>
          &lt;
        </button>
        <div className={styles.projectCard}>
          <ProjectCard project={projects[currentProjectIndex]} />
        </div>
        <button className={styles.navButton} onClick={nextProject}>
          &gt;
        </button>
      </div>
    </section>
  );
};
