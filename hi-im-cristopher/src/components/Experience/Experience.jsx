import React from 'react';

import styles from './Experience.module.css'
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { getImageUrl } from '../../utils';

export const Experience = () => {
    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}>Experiencia</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
                <Swiper
                    className={styles.history}
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {history.map((historyItem, id) => {
                        return (
                            <SwiperSlide key={id}>
                                <div className={styles.historyItem}>
                                    <img
                                        src={getImageUrl(historyItem.imageSrc)}
                                        alt={`${historyItem.organisation} Logo`}
                                    />

                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                                        <ul>
                                            {historyItem.experiences.map((experience, id) => {
                                                return <li key={id}>{experience}</li>;
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                {/* <ul className={styles.history}>{
                history.map((historyItem, id) => {
                    return <li key={id} className={styles.historyItem}>
                        <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experiences.map((experience, id) => {
                                return <li key={id}>{experience}</li>
                            })}</ul>
                        </div>
                    </li>
                })
            }</ul> */}
            </div>
        </section>
    )
}
