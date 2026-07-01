'use client';
import { useState, useEffect } from 'react';
import styles from './layanan.module.css';

const defaultServices = [
  {
    title: 'Make Up Artist',
    startingPrice: '2000000',
    isPopular: false,
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
    startingPrice: '15000000',
    isPopular: true,
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
    startingPrice: '5000000',
    isPopular: false,
    features: [
      'Pelaminan Eksklusif',
      'Mini Garden',
      'Karpet Jalan',
      'Standing Flowers (4 buah)',
      'Kotak Uang (2 buah)',
    ],
  },
];

const formatPrice = (val) => {
  if (!val) return 'Hubungi Kami';
  if (val.toString().startsWith('Rp')) return val;
  const num = Number(val.toString().replace(/[^0-9]/g, ''));
  return !isNaN(num) && num > 0 ? `Rp ${num.toLocaleString('id-ID')}` : val;
};

export default function LayananPage() {
  const [services, setServices] = useState(defaultServices);
  const [whatsapp, setWhatsapp] = useState('6281234567890');

  useEffect(() => {
    import('@/sanity/client').then(({ client }) => {
      client.fetch('*[_type == "siteSettings"][0].whatsapp').then(wa => {
        if (wa) setWhatsapp(wa);
      }).catch(err => console.error("Error fetching WA for Layanan:", err));

      client.fetch('*[_type == "service"] | order(order asc, _createdAt desc)').then(data => {
        if (data && data.length > 0) {
          setServices(data);
        }
      }).catch(err => console.error("Error fetching services:", err));
    });
  }, []);

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h1 className="section-title text-gold">Layanan & Harga</h1>
          <p className="section-subtitle">
            Wujudkan pernikahan impian Anda dengan pilihan paket elegan yang disesuaikan dengan kebutuhan Anda.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const isPopular = service.isPopular || service.popular || false;
            const priceText = formatPrice(service.startingPrice || service.price);
            const featuresList = service.features || [];

            return (
              <div 
                key={index} 
                className={`glass-panel reveal ${styles.card} ${isPopular ? styles.cardPopular : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {isPopular && (
                  <div className={styles.popularBadge}>Paling Diminati</div>
                )}
                
                <div className={styles.cardHeader}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <div className={styles.priceLabel}>Mulai dari</div>
                  <div className={styles.price}>{priceText}</div>
                </div>
                
                {service.description && (
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>
                    {service.description}
                  </p>
                )}
                
                <ul className={styles.features}>
                  {featuresList.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className={styles.cardFooter}>
                  <a 
                    href={`https://wa.me/${whatsapp}?text=Halo%20Sabiya%20Wedding,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(service.title)}.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`btn ${isPopular ? 'btn-primary' : 'btn-outline'}`} 
                    style={{ width: '100%', display: 'inline-block' }}
                  >
                    Konsultasi Sekarang
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
