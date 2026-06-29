import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.glassCard}>
        <h1 className={styles.title}>
          Wujudkan Pernikahan <span>Impian Anda</span>
        </h1>
        <p className={styles.subtitle}>
          Sabiya Wedding menghadirkan keindahan dan keanggunan dalam setiap momen berharga Anda. 
          Percayakan dekorasi, makeup, dan persiapan pernikahan Anda kepada tim profesional kami.
        </p>
        <div className={styles.actions}>
          <a href="https://wa.me/6281234567890?text=Halo%20Sabiya%20Wedding,%20saya%20tertarik%20untuk%20konsultasi%20gratis." target="_blank" rel="noopener noreferrer" className="btn btn-primary">Konsultasi Gratis</a>
          <a href="#layanan" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Lihat Layanan</a>
        </div>
      </div>
    </section>
  );
}
