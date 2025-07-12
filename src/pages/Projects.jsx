import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

// Impor gambar proyek Anda
import projImg1 from '../assets/project1.png'; // Ganti dengan gambar Anda

const projectData = [
  {
    image: projImg1,
    title: "Dpoer-Koe!",
    description: "Platform berbagi resep masakan, tips memasak online",
    tags: ["Java SpringBoot", "React", "Mysql"],
    link: "https://github.com/AdamMunawar/dapoerkoe-pbo"
  },
];

function Projects() {
  return (
    <section id="projects" className="section_container">
      {/* Animasi untuk judul */}
      <h2 className={styles.title} data-aos="fade-up">PROYEK SAYA</h2>

      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          // Tambahkan atribut data-aos di sini, gunakan delay untuk efek berurutan
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;