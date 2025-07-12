import React from 'react';
import styles from './ProjectCard.module.css';

// Props: image, title, description, tags, link
function ProjectCard({ image, title, description, tags, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <div className={styles.projectCard}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
          <div className={styles.cardTags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;