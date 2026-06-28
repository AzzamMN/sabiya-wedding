import Hero from '../components/Hero';
import ServicePreview from '../components/ServicePreview';
import Testimonial from '../components/Testimonial';
import styles from './page.module.css';

export const metadata = {
  title: 'Sabiya Wedding | Wujudkan Pernikahan Impian Anda',
  description: 'Sabiya Wedding menghadirkan keindahan dan keanggunan dalam setiap momen berharga Anda. Melayani dekorasi, MUA, dan paket pernikahan lengkap.',
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <ServicePreview />
      <Testimonial />
    </main>
  );
}
