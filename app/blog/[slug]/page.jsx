import Link from 'next/link';
import { client } from '@/sanity/client';
import styles from './detail.module.css';

export const revalidate = 60;

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  let post = null;
  try {
    const query = `*[_type == "blog" && slug.current == $slug][0] {
      title,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      excerpt,
      content
    }`;
    post = await client.fetch(query, { slug });
  } catch (err) {
    console.error("Error fetching blog post by slug:", err);
  }

  const titleText = post?.title || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const dateText = post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '15 Jan 2026';
  const imageUrl = post?.imageUrl || "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className={styles.detailPage}>
      <div className="container">
        <Link href="/blog" className={styles.backLink}>
          &larr; Kembali ke Blog
        </Link>
        
        <article className={styles.article}>
          <header className={styles.header}>
            <span className={styles.date}>{dateText}</span>
            <h1 className={styles.title}>
              {titleText}
            </h1>
          </header>
          
          <div className={styles.imageWrapper}>
            <img 
              src={imageUrl} 
              alt={titleText} 
              className={styles.image} 
            />
          </div>
          
          <div className={styles.body}>
            {post?.excerpt && (
              <p style={{ fontSize: '1.15rem', fontWeight: '500', color: 'var(--color-gold)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                {post.excerpt}
              </p>
            )}
            {post ? (
              <div>
                <p>Artikel ini diterbitkan secara eksklusif oleh tim Sabiya Wedding. Dalam mewujudkan pernikahan impian, setiap detail dari dekorasi hingga riasan memiliki filosofi keindahan tersendiri.</p>
                <p>Untuk konsultasi mengenai tema pernikahan ini atau merancang konsep impian Anda sendiri, jangan ragu untuk menghubungi tim dekorasi dan MUA profesional Sabiya Wedding melalui WhatsApp.</p>
              </div>
            ) : (
              <div>
                <p>Ini adalah konten untuk artikel: <strong>{titleText}</strong>. Silakan tulis isi lengkap artikel ini melalui panel Sanity Studio.</p>
                <p>Sabiya Wedding senantiasa memberikan inspirasi terbaik untuk hari istimewa Anda.</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
