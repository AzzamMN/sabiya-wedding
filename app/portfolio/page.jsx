'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './portfolio.module.css';

export default function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'A & B Wedding',
      category: 'Traditional',
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Intimate Vows',
      category: 'Modern',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Summer Romance',
      category: 'Outdoor',
      imageUrl: 'https://images.unsplash.com/photo-1532712938736-59c79d01b17d?q=80&w=2072&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Classic Elegance',
      category: 'Indoor',
      imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Garden Party',
      category: 'Outdoor',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Royal Celebration',
      category: 'Traditional',
      imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 7,
      title: 'Rustic Charm',
      category: 'Modern',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 8,
      title: 'Beach Bliss',
      category: 'Destination',
      imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <header className={`${styles.header} reveal`}>
          <h1 className="section-title text-gold">Our Portfolio</h1>
          <p className="section-subtitle">
            Explore some of the most beautiful and unforgettable moments we have had the honor of capturing and bringing to life.
          </p>
        </header>

        <div className={styles.galleryGrid}>
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.galleryItem} reveal`}
              onClick={() => setSelectedItem(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.overlay}>
                <span className={styles.overlayCategory}>{item.category}</span>
                <h3 className={styles.overlayTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className={styles.modal} onClick={() => setSelectedItem(null)}>
          <button className={styles.closeButton} onClick={() => setSelectedItem(null)}>
            &times;
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                fill
                className={styles.modalImage}
                sizes="100vw"
                quality={100}
              />
            </div>
            <div className={styles.modalInfo}>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
