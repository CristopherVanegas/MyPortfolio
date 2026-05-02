import React from 'react'

import styles from './Projects.module.css';

import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard/ProjectCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Proyectos</h2>

      <Swiper
        className={styles.projects}
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          831: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1150: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {projects.map((project, id) => {
          return (
            <SwiperSlide key={id} className={styles.projectSlide}>
              <ProjectCard project={project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
}