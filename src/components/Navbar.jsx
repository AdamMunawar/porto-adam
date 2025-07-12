import React from 'react';
import { Link } from 'react-scroll';
// Impor ikon-ikon yang kita butuhkan
import { TbSparkles, TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import styles from './Navbar.module.css'; // Ganti nama file CSS jika perlu


// Terima props isExpanded dan toggleSidebar dari App.jsx
function Sidebar({ isExpanded, toggleSidebar }) {
  return (

    <nav className={isExpanded ? styles.sidebar : `${styles.sidebar} ${styles.collapsed}`}>
      <div> {/* Wrapper untuk header dan menu */}
        <div className={styles.sidebarHeader}>
          <TbSparkles className={styles.logoIcon} />
          <span className={styles.logoText}>Adamnwr</span>
        </div>
        
        <ul className={styles.navMenu}>
          <li title="Beranda">
            <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className={styles.navLink} activeClass={styles.activeLink}>
              <FaHome className={styles.linkIcon} />
              <span className={styles.linkText}>Beranda</span>
            </Link>
          </li>
          <li title="Tentang">
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className={styles.navLink} activeClass={styles.activeLink}>
              <FaUser className={styles.linkIcon} />
              <span className={styles.linkText}>Tentang</span>
            </Link>
          </li>
          <li title="Proyek">
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className={styles.navLink} activeClass={styles.activeLink}>
              <FaFolderOpen className={styles.linkIcon} />
              <span className={styles.linkText}>Proyek</span>
            </Link>
          </li>
          <li title="Kontak">
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className={styles.navLink} activeClass={styles.activeLink}>
              <FaEnvelope className={styles.linkIcon} />
              <span className={styles.linkText}>Kontak</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Tombol Toggle yang sekarang menyatu di bawah */}
      <button className={styles.toggleButton} onClick={toggleSidebar} title={isExpanded ? 'Minimize Sidebar' : 'Expand Sidebar'}>
        {isExpanded ? <TbLayoutSidebarLeftCollapse className={styles.linkIcon} /> : <TbLayoutSidebarLeftExpand className={styles.linkIcon} />}
        <span className={styles.linkText}>Minimize</span>
      </button>
    </nav>
  );
}

export default Sidebar;