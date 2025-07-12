import React from 'react';
import styles from './About.module.css';
function About() {
  return (
    <section id="about" className="section_container">
     <div className={styles.aboutCard} data-aos="fade-up">
        <h2 className={styles.title}>TENTANG SAYA</h2>
        <p className={styles.description}>
          Saya adalah seorang Frontend Developer dengan hasrat untuk menciptakan antarmuka pengguna yang bersih, modern, dan intuitif. Dengan pengalaman dalam ekosistem React, saya mengubah ide-ide kompleks menjadi kenyataan digital yang indah dan fungsional.
        </p>
      </div>
    </section>
  );
}
export default About;