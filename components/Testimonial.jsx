import styles from './Testimonial.module.css';

const testimonials = [
  {
    name: 'Amanda & Reza',
    date: 'Januari 2026',
    text: 'Sangat bersyukur memilih Sabiya Wedding! Dekorasi yang sangat elegan dan sesuai dengan impian kami. Timnya sangat responsif dan membantu dari awal sampai akhir acara.',
    initials: 'AR'
  },
  {
    name: 'Siti & Budi',
    date: 'Maret 2026',
    text: 'Makeup-nya juara banget! Bikin pangling tapi tetep memancarkan kecantikan natural. Paket lengkapnya bener-bener ngebantu kita yang super sibuk kerja. Terima kasih banyak Sabiya!',
    initials: 'SB'
  },
  {
    name: 'Diana & Tommy',
    date: 'April 2026',
    text: 'Acara berjalan sangat lancar berkat team WO dari Sabiya. Mulai dari prosesi adat sampai resepsi semuanya rapi. Banyak tamu yang memuji dekorasi cantiknya!',
    initials: 'DT'
  }
];

export default function Testimonial() {
  return (
    <section id="testimoni" className={styles.testimonialSection}>
      <div className="container">
        <div className="text-center reveal">
          <h2 className="section-title">Kata <span className="text-gold">Mereka</span></h2>
          <p className="section-subtitle">
            Kebahagiaan dan kepuasan klien adalah pencapaian terbesar kami. Simak pengalaman manis mereka bersama Sabiya.
          </p>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((testi, idx) => (
            <div key={idx} className={`${styles.reviewCard} reveal`} style={{ animationDelay: `${idx * 150}ms` }}>
              <div className={styles.quoteIcon}>"</div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>"{testi.text}"</p>
              <div className={styles.client}>
                <div className={styles.avatar}>{testi.initials}</div>
                <div className={styles.clientInfo}>
                  <h4>{testi.name}</h4>
                  <span>{testi.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
