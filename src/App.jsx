import React, { useState, useEffect } from 'react';
import AOS from 'aos';
// Ganti nama impor Navbar menjadi Sidebar agar lebih sesuai
import Sidebar from './components/Navbar'; 
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import styles from './App.module.css'; // Kita butuh file CSS untuk App
import 'aos/dist/aos.css';

function App() {
  // State untuk mengontrol kondisi sidebar, sekarang ada di App.jsx
  // Defaultnya diperluas (true)
   const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
   useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true,     // Animasi hanya terjadi sekali
      offset: 100,    // Memicu animasi sedikit lebih awal sebelum elemen terlihat
    });
  }, []); // Array kosong memastikan ini hanya berjalan sekali

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className={styles.appContainer}>
      {/* Kirim state dan fungsi toggle sebagai props ke Sidebar */}
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      {/* Konten utama sekarang dibungkus dengan div yang class-nya dinamis */}
      <main className={isSidebarExpanded ? styles.mainContentExpanded : styles.mainContentCollapsed}>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
        
      </main>
    </div>
  );
}

export default App;