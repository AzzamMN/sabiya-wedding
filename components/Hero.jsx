'use client';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [settings, setSettings] = useState({
    heroTitle: "Wujudkan Pernikahan Impian Anda",
    heroSubtitle: "Sabiya Wedding menghadirkan keindahan dan keanggunan dalam setiap momen berharga Anda. Percayakan dekorasi, makeup, dan persiapan pernikahan Anda kepada tim profesional kami.",
    whatsapp: "6281234567890",
    heroImageUrl: null
  });

  useEffect(() => {
    import('@/sanity/client').then(({ client }) => {
      client.fetch('*[_type == "siteSettings"][0]{heroTitle, heroSubtitle, whatsapp, heroImage}').then(async (data) => {
        if (data) {
          let imageUrl = null;
          if (data.heroImage) {
            const { urlFor } = await import('@/sanity/image');
            imageUrl = urlFor(data.heroImage).width(1920).quality(80).url();
          }
          setSettings({
            heroTitle: data.heroTitle || "Wujudkan Pernikahan Impian Anda",
            heroSubtitle: data.heroSubtitle || "Sabiya Wedding menghadirkan keindahan dan keanggunan dalam setiap momen berharga Anda. Percayakan dekorasi, makeup, dan persiapan pernikahan Anda kepada tim profesional kami.",
            whatsapp: data.whatsapp || "6281234567890",
            heroImageUrl: imageUrl
          });
        }
      }).catch(err => console.error("Error fetching Hero settings:", err));
    });
  }, []);

  const sectionStyle = settings.heroImageUrl ? {
    backgroundImage: `url('${settings.heroImageUrl}')`
  } : {};

  return (
    <section className={styles.heroSection} style={sectionStyle}>
      <div className={styles.glassCard}>
        <h1 className={styles.title}>
          {settings.heroTitle}
        </h1>
        <p className={styles.subtitle}>
          {settings.heroSubtitle}
        </p>
        <div className={styles.actions}>
          <a href={`https://wa.me/${settings.whatsapp}?text=Halo%20Sabiya%20Wedding,%20saya%20tertarik%20untuk%20konsultasi%20gratis.`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Konsultasi Gratis</a>
          <a href="#layanan" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Lihat Layanan</a>
        </div>
      </div>
    </section>
  );
}
