import Link from 'next/link';
import styles from './detail.module.css';

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return (
    <div className={styles.detailPage}>
      <div className="container">
        <Link href="/blog" className={styles.backLink}>
          &larr; Kembali ke Blog
        </Link>
        
        <article className={styles.article}>
          <header className={styles.header}>
            <span className={styles.date}>15 Jan 2026</span>
            <h1 className={styles.title}>
              {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
          </header>
          
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200" 
              alt="Blog Header" 
              className={styles.image} 
            />
          </div>
          
          <div className={styles.body}>
            <p>Ini adalah konten dummy untuk artikel blog dengan slug: <strong>{slug}</strong>. Di halaman sesungguhnya, data ini akan diambil dari CMS atau database.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h2>Subjudul Artikel</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </article>
      </div>
    </div>
  );
}
