import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../../utils';

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, source }
}) => {
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    return (
        <div className={styles.container}>
            {isImageOpen &&
                createPortal(
                    <div
                        className={styles.imageModal}
                        onClick={() => setIsImageOpen(false)}
                    >
                        <img
                            src={getImageUrl(imageSrc)}
                            alt={`Imagen ampliada de ${title}`}
                            className={styles.imageModalContent}
                        />
                    </div>,
                    document.body
                )
            }

            {isMoreOpen &&
                createPortal(
                    <div
                        className={styles.moreModal}
                        onClick={() => setIsMoreOpen(false)}
                    >
                        <div
                            className={styles.moreContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeButton}
                                onClick={() => setIsMoreOpen(false)}
                            >
                                ×
                            </button>

                            <h3>{title}</h3>
                            <p>{description}</p>

                            <h4>Tecnologías utilizadas</h4>
                            <ul>
                                {skills.map((skill, id) => {
                                    return <li key={id}>{skill}</li>;
                                })}
                            </ul>
                        </div>
                    </div>,
                    document.body
                )
            }

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
                <button
                    className={`${styles.link} ${styles.moreButton}`}
                    onClick={() => setIsMoreOpen(true)}
                >
                    Ver más
                </button>

                <a href={source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
};