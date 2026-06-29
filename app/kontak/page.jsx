'use client';
import { useState } from 'react';
import styles from './kontak.module.css';

export default function KontakPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to send message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      e.target.reset(); // clear form
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="container" style={{ padding: 'var(--space-10) var(--space-4)' }}>
      <div className="text-center reveal">
        <h1 className="section-title">Hubungi Kami</h1>
        <p className="section-subtitle">
          Mari diskusikan pernikahan impian Anda bersama tim ahli kami.
        </p>
      </div>

      <div className={`${styles.contactGrid} reveal`}>
        {/* Contact Info */}
        <div className={`glass-panel ${styles.infoCard}`}>
          <div className={styles.infoItem}>
            <h3 className={styles.infoTitle}>Alamat Kantor</h3>
            <p className={styles.infoText}>
              Jl. Kenangan Indah No. 123<br />
              Kebayoran Baru, Jakarta Selatan<br />
              DKI Jakarta 12190
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3 className={styles.infoTitle}>Telepon / WhatsApp</h3>
            <p className={styles.infoText}>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-gold">+62 812 3456 7890</a>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3 className={styles.infoTitle}>Email</h3>
            <p className={styles.infoText}>
              <a href="mailto:hello@sabiyawedding.com" className="text-gold">hello@sabiyawedding.com</a>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3 className={styles.infoTitle}>Jam Operasional</h3>
            <p className={styles.infoText}>
              Senin - Jumat: 09.00 - 18.00 WIB<br />
              Sabtu: 10.00 - 15.00 WIB
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel" style={{ padding: 'var(--space-6)' }}>
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>✨</div>
              <h3 style={{ marginBottom: 'var(--space-2)', color: 'var(--color-gold)' }}>Pesan Berhasil Terkirim!</h3>
              <p>Terima kasih telah menghubungi Sabiya Wedding. Tim kami akan membalas pesan Anda dalam waktu 1x24 jam.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={styles.input} 
                  placeholder="Masukkan nama lengkap Anda"
                  required 
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={styles.input} 
                  placeholder="email@contoh.com"
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Nomor Telepon / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className={styles.input} 
                  placeholder="Contoh: +6281234567890"
                  required 
                  pattern="[\+]?[0-9]{10,14}"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Pesan</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className={styles.textarea} 
                  placeholder="Ceritakan tentang pernikahan impian Anda..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: 'var(--space-2)' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
