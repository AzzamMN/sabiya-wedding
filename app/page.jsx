import Hero from '../components/Hero';
import ServicePreview from '../components/ServicePreview';
import Testimonial from '../components/Testimonial';
import LayananPage from './layanan/page';
import PortfolioPage from './portfolio/page';
import TentangKami from './tentang/page';
import BlogPage from './blog/page';
import styles from './page.module.css';

export const metadata = {
  title: 'Sabiya Wedding | Wujudkan Pernikahan Impian Anda',
  description: 'Sabiya Wedding menghadirkan keindahan dan keanggunan dalam setiap momen berharga Anda. Melayani dekorasi, MUA, dan paket pernikahan lengkap.',
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div id="beranda">
        <Hero />
      </div>
      <div id="layanan">
        <LayananPage />
      </div>
      <div id="portfolio">
        <PortfolioPage />
      </div>
      <div id="tentang">
        <TentangKami />
      </div>
      {/* BlogPage already has id="blog" */}
      <BlogPage />
    </main>
  );
}
