import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih atas pesan Anda!");
  };

  return (
    <section id="contact" className="section_container">
       {/* Tambahkan atribut data-aos di sini */}
       <div className={styles.contactCard} data-aos="fade-up">
        <h2 className={styles.title}>HUBUNGI SAYA</h2>
        <p className={styles.subtitle}>Punya pertanyaan atau ingin bekerja sama? Kirimkan saya pesan!</p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nama Anda" required className={styles.inputField} />
          <input type="email" name="email" placeholder="Email Anda" required className={styles.inputField} />
          <textarea name="message" rows="5" placeholder="Pesan Anda" required className={styles.inputField}></textarea>
          <button type="submit" className={styles.submitButton}>Kirim Pesan</button>
        </form>
       </div>
    </section>
  );
}

export default Contact;