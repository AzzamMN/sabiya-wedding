'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

const defaultAbout = {
  title: 'Kisah Kami',
  subtitle: 'Menciptakan momen magis yang abadi, satu pernikahan pada satu waktu.',
  heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  philosophyTitle: 'Filosofi Sabiya',
  philosophyImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  philosophyText1: 'Berawal dari sebuah mimpi kecil untuk merayakan cinta dalam bentuknya yang paling murni. Sabiya Wedding lahir dari keyakinan bahwa setiap kisah cinta adalah mahakarya yang unik, yang layak diceritakan dengan keanggunan, detail, dan keindahan.',
  philosophyText2: 'Kami memadukan sentuhan klasik dengan tren modern, memastikan bahwa riasan dan busana yang Anda kenakan tidak hanya membuat Anda tampil memesona, namun juga memancarkan karakter asli Anda.',
  quote: '"Bukan sekadar merias wajah, tapi menonjolkan pancaran kebahagiaan dari dalam jiwa."',
};

const defaultTeam = [
  {
    name: 'Sarah Sabiya',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: 'Dengan pengalaman lebih dari 10 tahun di industri kecantikan dan pernikahan, Sarah memiliki visi untuk menciptakan standar baru dalam pelayanan pengantin yang hangat, personal, dan tak tertandingi.',
  },
  {
    name: 'Aisyah Kirana',
    role: 'Lead Makeup Artist',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: "Aisyah dikenal dengan ciri khas 'Flawless Glow'-nya. Sentuhan tangannya yang lembut mampu menyulap setiap calon pengantin menjadi versi terbaik dari diri mereka sendiri.",
  },
  {
    name: 'Dian Pertiwi',
    role: 'Head of Styling',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: 'Dari pemilihan kebaya hingga gaun pengantin modern, Dian memiliki mata yang tajam untuk detail. Ia memastikan setiap potongan kain jatuh dengan sempurna di tubuh sang pengantin.',
  },
];

export default function TentangKami() {
  const [aboutData, setAboutData] = useState(defaultAbout);
  const [teamMembers, setTeamMembers] = useState(defaultTeam);

  useEffect(() => {
    import('@/sanity/client').then(({ client }) => {
      client.fetch(`*[_type == "about"][0] {
        title,
        subtitle,
        "heroUrl": heroImage.asset->url,
        philosophyTitle,
        "philosophyUrl": philosophyImage.asset->url,
        philosophyText1,
        philosophyText2,
        quote
      }`).then(data => {
        if (data) {
          setAboutData({
            title: data.title || defaultAbout.title,
            subtitle: data.subtitle || defaultAbout.subtitle,
            heroImage: data.heroUrl || defaultAbout.heroImage,
            philosophyTitle: data.philosophyTitle || defaultAbout.philosophyTitle,
            philosophyImage: data.philosophyUrl || defaultAbout.philosophyImage,
            philosophyText1: data.philosophyText1 || defaultAbout.philosophyText1,
            philosophyText2: data.philosophyText2 || defaultAbout.philosophyText2,
            quote: data.quote || defaultAbout.quote,
          });
        }
      }).catch(err => console.error("Error fetching about:", err));

      client.fetch(`*[_type == "team"] | order(order asc, _createdAt desc) {
        name,
        role,
        "imageUrl": image.asset->url,
        bio
      }`).then(data => {
        if (data && data.length > 0) {
          setTeamMembers(data.map(t => ({
            name: t.name || 'Tim Sabiya',
            role: t.role || 'Spesialis Pernikahan',
            image: t.imageUrl || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            bio: t.bio || '',
          })));
        }
      }).catch(err => console.error("Error fetching team:", err));
    });
  }, []);

  return (
    <section>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src={aboutData.heroImage}
          alt="Wedding Background"
          className={styles.heroBackground}
        />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.heroTitle} reveal`}>{aboutData.title}</h1>
          <p className={`${styles.heroSubtitle} reveal`}>
            {aboutData.subtitle}
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={`container ${styles.philosophyGrid}`}>
          <div className={`${styles.philosophyImageWrapper} reveal`}>
            <img
              src={aboutData.philosophyImage}
              alt={aboutData.philosophyTitle}
              className={styles.philosophyImage}
            />
          </div>
          <div className={`${styles.philosophyContent} reveal`}>
            <h2 className="section-title">
              {aboutData.philosophyTitle.split(' ')[0]} <span className="text-gold">{aboutData.philosophyTitle.split(' ').slice(1).join(' ') || 'Sabiya'}</span>
            </h2>
            <p className={styles.philosophyText}>
              {aboutData.philosophyText1}
            </p>
            <p className={styles.philosophyText}>
              {aboutData.philosophyText2}
            </p>
            {aboutData.quote && (
              <blockquote className={styles.philosophyHighlight}>
                {aboutData.quote}
              </blockquote>
            )}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Kenali Tim <span className="text-gold">Kami</span></h2>
            <p className="section-subtitle">
              Para tangan terampil di balik setiap tampilan sempurna dan momen yang tak terlupakan.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className={`glass-panel ${styles.teamCard} reveal`} style={{ animationDelay: `${idx * 150}ms` }}>
                <div className={styles.teamImageWrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                {member.bio && (
                  <p className={styles.teamBio}>
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
