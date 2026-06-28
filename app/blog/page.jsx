import Link from 'next/link';
import styles from './blog.module.css';

const blogPosts = [
  {
    id: 1,
    slug: 'tren-warna-dekorasi-pernikahan-2026',
    title: 'Tren Warna Dekorasi Pernikahan 2026',
    excerpt: 'Temukan warna-warna indah yang akan menjadi tren utama untuk pernikahan di tahun 2026.',
    date: '15 Jan 2026',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    slug: 'tips-memilih-mua',
    title: 'Tips Memilih MUA yang Tepat',
    excerpt: 'Panduan lengkap memilih Makeup Artist agar tampil memukau di hari bahagia Anda.',
    date: '28 Feb 2026',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    slug: 'panduan-menyusun-anggaran-pernikahan',
    title: 'Panduan Menyusun Anggaran Pernikahan',
    excerpt: 'Cara cerdas mengatur budget pernikahan tanpa mengorbankan impian Anda.',
    date: '10 Mar 2026',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BlogPage() {
  return (
    <section className={styles.blogPage} id="blog">
      <div className="container">
        <header className={styles.header}>
          <h1 className="section-title text-gold text-center">Blog & Inspirasi</h1>
          <p className="section-subtitle">Temukan berbagai tips, tren, dan inspirasi untuk mewujudkan pernikahan impian Anda bersama Sabiya Wedding.</p>
        </header>

        <div className={styles.grid}>
          {blogPosts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <span className={styles.date}>{post.date}</span>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Baca Selengkapnya &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
