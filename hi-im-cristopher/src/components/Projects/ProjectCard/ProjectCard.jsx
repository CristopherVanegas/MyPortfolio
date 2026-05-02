import React, { useState } from 'react'
import styles from './ProjectCard.module.css';

import { getImageUrl } from '../../../utils';

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source }
}) => {
    const [isImageOpen, setIsImageOpen] = useState(false);
    return (
        <div className={styles.container}>
            {isImageOpen && (
                <div className={styles.imageModal} onClick={() => setIsImageOpen(false)}>
                    <img
                        src={getImageUrl(imageSrc)}
                        alt={`Imagen ampliada de ${title}`}
                        className={styles.imageModalContent}
                    />
                </div>
            )}
            {/* <img src={getImageUrl(imageSrc)} alt={`Imagen de ${title}`} className={styles.image} /> */}
            <img
                src={getImageUrl(imageSrc)}
                alt={`Imagen de ${title}`}
                className={styles.image}
                onClick={() => setIsImageOpen(true)}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    )
}
