import styles from './layanan.module.css';

export const metadata = {
  title: 'Layanan & Harga - Sabiya Wedding',
  description: 'Pilihan layanan dan harga paket pernikahan Sabiya Wedding.',
};

export default function LayananPage() {
  const services = [
    {
      title: 'Make Up Artist',
      price: 'Rp 2.000.000',
      popular: false,
      features: [
        'Makeup & Hairdo/Hijab Pengantin',
        'Retouch 1x (Resepsi)',
        'Melati & Aksesoris',
        'Makeup Orang Tua (2 orang)',
        'Softlens & Fake Nails',
      ],
    },
    {
      title: 'Paket All-In',
      price: 'Rp 15.000.000',
      popular: true,
      features: [
        'Dekorasi Lengkap',
        'Make Up Artist & Busana',
        'Dokumentasi (Foto & Video)',
        'MC & Entertainment',
        'Katering (500 pax)',
        'Wedding Organizer',
      ],
    },
    {
      title: 'Dekorasi',
      price: 'Rp 5.000.000',
      popular: false,
      features: [
        'Pelaminan Eksklusif',
        'Mini Garden',
        'Karpet Jalan',
        'Standing Flowers (4 buah)',
        'Kotak Uang (2 buah)',
      ],
    },
  ];

  return (
    <main className={styles.page}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h1 className="section-title text-gold">Layanan & Harga</h1>
          <p className="section-subtitle">
            Wujudkan pernikahan impian Anda dengan pilihan paket elegan yang disesuaikan dengan kebutuhan Anda.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`glass-panel reveal ${styles.card} ${service.popular ? styles.cardPopular : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {service.popular && (
                <div className={styles.popularBadge}>Paling Diminati</div>
              )}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.title}>{service.title}</h3>
                <div className={styles.priceLabel}>Mulai dari</div>
                <div className={styles.price}>{service.price}</div>
              </div>
              
              <ul className={styles.features}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={styles.cardFooter}>
                <button className={`btn ${service.popular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                  Konsultasi Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
