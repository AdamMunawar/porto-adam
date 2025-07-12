import React from 'react';
import styles from './Hero.module.css';
import profileImage from '../assets/profile.png'; // Impor gambar Anda
import { FaArrowRight } from 'react-icons/fa';

function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroCard}>
        {/* Foto profil akan berada di belakang teks karena z-index */}
        <img src={profileImage} alt="Adam" className={styles.profileImage} />

        {/* Konten utama di dalam kartu */}
        <div className={styles.cardContent}>
          <h1 className={styles.heroName}>Muhammad Adam Sirojuddin Munawar</h1>
          
          <div className={styles.detailsRow}>
            <p className={styles.heroSubtitle}>Frontend Developer</p>
            <a href="#contact" className={styles.heroCta}>
              Get in touch <FaArrowRight className={styles.arrowIcon} />
            </a>
          </div>
        </div>
      </div>

      {/* Indikator Scroll Down */}
      <a href="#about" className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
      </a>
    </section>
  );
}

export default Hero;