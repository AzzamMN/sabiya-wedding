import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Tentang Kami - Sabiya Wedding',
  description: 'Kisah, filosofi, dan tim di balik karya indah Sabiya Wedding.',
};

export default function TentangKami() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Wedding Background"
          fill
          className={styles.heroBackground}
        />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.heroTitle} reveal`}>Kisah Kami</h1>
          <p className={`${styles.heroSubtitle} reveal`}>
            Menciptakan momen magis yang abadi, satu pernikahan pada satu waktu.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={`container ${styles.philosophyGrid}`}>
          <div className={`${styles.philosophyImageWrapper} reveal`}>
            <Image
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Filosofi Sabiya Wedding"
              fill
              className={styles.philosophyImage}
            />
          </div>
          <div className={`${styles.philosophyContent} reveal`}>
            <h2 className="section-title">Filosofi <span className="text-gold">Sabiya</span></h2>
            <p className={styles.philosophyText}>
              Berawal dari sebuah mimpi kecil untuk merayakan cinta dalam bentuknya yang paling murni. Sabiya Wedding lahir dari keyakinan bahwa setiap kisah cinta adalah mahakarya yang unik, yang layak diceritakan dengan keanggunan, detail, dan keindahan.
            </p>
            <p className={styles.philosophyText}>
              Kami memadukan sentuhan klasik dengan tren modern, memastikan bahwa riasan dan busana yang Anda kenakan tidak hanya membuat Anda tampil memesona, namun juga memancarkan karakter asli Anda.
            </p>
            <blockquote className={styles.philosophyHighlight}>
              "Bukan sekadar merias wajah, tapi menonjolkan pancaran kebahagiaan dari dalam jiwa."
            </blockquote>
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
            {/* Founder Card */}
            <div className={`glass-panel ${styles.teamCard} reveal`}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Sarah Sabiya - Founder"
                  fill
                  className={styles.teamImage}
                />
              </div>
              <h3 className={styles.teamName}>Sarah Sabiya</h3>
              <p className={styles.teamRole}>Founder & Creative Director</p>
              <p className={styles.teamBio}>
                Dengan pengalaman lebih dari 10 tahun di industri kecantikan dan pernikahan, Sarah memiliki visi untuk menciptakan standar baru dalam pelayanan pengantin yang hangat, personal, dan tak tertandingi.
              </p>
            </div>

            {/* Lead MUA Card */}
            <div className={`glass-panel ${styles.teamCard} reveal`}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Aisyah Kirana - Lead MUA"
                  fill
                  className={styles.teamImage}
                />
              </div>
              <h3 className={styles.teamName}>Aisyah Kirana</h3>
              <p className={styles.teamRole}>Lead Makeup Artist</p>
              <p className={styles.teamBio}>
                Aisyah dikenal dengan ciri khas &apos;Flawless Glow&apos;-nya. Sentuhan tangannya yang lembut mampu menyulap setiap calon pengantin menjadi versi terbaik dari diri mereka sendiri.
              </p>
            </div>
            
            {/* Wedding Stylist Card */}
            <div className={`glass-panel ${styles.teamCard} reveal`}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Dian Pertiwi - Wedding Stylist"
                  fill
                  className={styles.teamImage}
                />
              </div>
              <h3 className={styles.teamName}>Dian Pertiwi</h3>
              <p className={styles.teamRole}>Head of Styling</p>
              <p className={styles.teamBio}>
                Dari pemilihan kebaya hingga gaun pengantin modern, Dian memiliki mata yang tajam untuk detail. Ia memastikan setiap potongan kain jatuh dengan sempurna di tubuh sang pengantin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
