import styles from './Projects.module.css'
import { ProjectCard } from './ProjectCard/ProjectCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Projects = ({ projectsContent }) => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.header}>
        <span className={styles.eyebrow} aria-hidden="true" />
        <h2 className={styles.title}>{projectsContent.title}</h2>
      </div>

      <div className={styles.sliderShell}>
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
          {projectsContent.items.map((project, id) => (
            <SwiperSlide key={id} className={styles.projectSlide}>
              <ProjectCard project={project} labels={projectsContent.labels} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
