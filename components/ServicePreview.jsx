import styles from './ServicePreview.module.css';

const services = [
  {
    title: 'Dekorasi Elegan',
    desc: 'Transformasi ruang menjadi pemandangan menakjubkan dengan sentuhan dekorasi premium kami yang dirancang khusus untuk mewujudkan tema pernikahan impian Anda.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'MUA Profesional',
    desc: 'Pancarkan kecantikan alami Anda dengan sentuhan tangan terampil dari Makeup Artist kami, menjadikan Anda pusat perhatian di hari paling bahagia.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Paket Pernikahan',
    desc: 'Solusi lengkap untuk hari bahagia Anda. Hemat waktu dan pikiran dengan paket all-in-one Sabiya yang dirancang untuk segala skala perayaan.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
  }
];

export default function ServicePreview() {
  return (
    <section id="layanan" className={styles.servicesSection}>
      <div className="container">
        <div className="text-center reveal">
          <h2 className="section-title">Layanan <span className="text-gold">Kami</span></h2>
          <p className="section-subtitle">
            Hadir dengan komitmen untuk menyempurnakan hari bahagia Anda melalui pilihan layanan berkualitas premium.
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div key={idx} className={`${styles.card} reveal`} style={{ animationDelay: `${idx * 100}ms` }}>
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <span className={styles.link}>Pelajari Lebih Lanjut</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
