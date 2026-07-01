'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './portfolio.module.css';

export default function PortfolioGallery({ initialItems = [] }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Semua');

  // Default items if Sanity database is empty
  const defaultItems = [
    {
      _id: 'def-1',
      title: 'A & B Wedding',
      category: 'Dekorasi',
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    },
    {
      _id: 'def-2',
      title: 'Intimate Vows',
      category: 'MUA & Gaun',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
    },
    {
      _id: 'def-3',
      title: 'Summer Romance',
      category: 'Dekorasi',
      imageUrl: 'https://images.unsplash.com/photo-1532712938736-59c79d01b17d?q=80&w=2072&auto=format&fit=crop',
    },
    {
      _id: 'def-4',
      title: 'Classic Elegance',
      category: 'Dokumentasi',
      imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
    },
    {
      _id: 'def-5',
      title: 'Garden Party',
      category: 'Dekorasi',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      _id: 'def-6',
      title: 'Royal Celebration',
      category: 'Tradisi',
      imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const items = initialItems && initialItems.length > 0 ? initialItems : defaultItems;

  const categories = ['Semua', 'Dekorasi', 'MUA & Gaun', 'Dokumentasi', 'Tradisi'];

  const filteredItems = activeCategory === 'Semua' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <header className={`${styles.header} reveal`}>
          <h1 className="section-title text-gold">Galeri Portfolio</h1>
          <p className="section-subtitle">
            Jelajahi momen-momen pernikahan istimewa dan mahakarya dekorasi yang telah kami persembahkan untuk para klien tercinta.
          </p>

          {/* Category Filter Buttons */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '30px',
                  border: activeCategory === cat ? 'none' : '1px solid var(--border-light)',
                  background: activeCategory === cat ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.7)',
                  color: activeCategory === cat ? 'white' : 'var(--text-primary)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat ? '0 4px 10px rgba(212, 175, 55, 0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            <div 
              key={item._id || item.id} 
              className={`${styles.galleryItem} reveal`}
              onClick={() => setSelectedItem(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.imageUrl}
                  alt={item.title || 'Portfolio Image'}
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
                alt={selectedItem.title || 'Portfolio Image'}
                fill
                className={styles.modalImage}
                sizes="100vw"
                quality={100}
              />
            </div>
            <div className={styles.modalInfo}>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.category}</p>
              {selectedItem.description && <p style={{ fontSize: '0.95rem', marginTop: '10px', color: '#eee' }}>{selectedItem.description}</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
