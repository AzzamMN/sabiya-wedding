'use client';
import { useState, useEffect } from 'react';

export default function Logo({ variant = 'light', className = '', height = '45px' }) {
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    import('@/sanity/client').then(({ client }) => {
      client.fetch('*[_type == "siteSettings"][0].logo').then(logo => {
        if (logo) {
          import('@/sanity/image').then(({ urlFor }) => {
            setLogoUrl(urlFor(logo).height(120).url());
          });
        }
      }).catch(err => console.error("Error fetching logo:", err));
    });
  }, []);

  // Color adaptation for both light (white navbar) and dark (transparent hero) backgrounds
  const textColor = variant === 'light' ? '#1c1d21' : '#ffffff';
  const goldColor = variant === 'light' ? '#b8860b' : '#f3e5ab'; // Deeper gold on light bg for contrast, bright champagne gold on dark bg
  const crownColor = variant === 'light' ? '#d4af37' : '#ffd700';

  if (logoUrl) {
    // For uploaded images, add adaptive drop-shadow so transparent PNGs or logos stand out crisply on both light and dark backgrounds
    const imgStyle = {
      height, 
      width: 'auto', 
      objectFit: 'contain', 
      display: 'block',
      filter: variant === 'light' 
        ? 'drop-shadow(0px 1px 2px rgba(0,0,0,0.25))' 
        : 'drop-shadow(0px 1px 3px rgba(0,0,0,0.8))',
      transition: 'all 0.3s ease'
    };
    return (
      <img 
        src={logoUrl} 
        alt="Sabiya Wedding Logo" 
        className={className}
        style={imgStyle}
      />
    );
  }

  return (
    <svg 
      className={className} 
      viewBox="2 2 56 46"
      style={{ height, width: 'auto', display: 'block' }}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* --- ROYAL MONOGRAM EMBLEM (SW) --- */}
      {/* Outer Circle Ring */}
      <circle cx="30" cy="32" r="17" stroke={crownColor} strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="32" r="15" stroke={goldColor} strokeWidth="0.5" fill="none" opacity="0.6" />

      {/* Monogram 'SW' Inside Circle */}
      <text 
        x="30" 
        y="38" 
        fontFamily="'Times New Roman', 'Georgia', serif" 
        fontSize="17" 
        fontStyle="italic" 
        fontWeight="bold" 
        fill={crownColor} 
        textAnchor="middle"
        letterSpacing="-1"
      >
        SW
      </text>

      {/* Royal Crown / Tiara Ornament Above Circle */}
      <path d="M30 6 L32.5 11 L36 10 C33.5 12 33.5 14 30 15 C26.5 14 26.5 12 24 10 L27.5 11 Z" fill={crownColor} />
      <path d="M21 13 C24 9.5 36 9.5 39 13 C37 14 34 12 30 13 C26 12 23 14 21 13 Z" fill={goldColor} opacity="0.85" />
      <circle cx="30" cy="5" r="1.2" fill={crownColor} />

      {/* Left Olive / Floral Leaf Wreath */}
      <path d="M11 43 C6 37 6 27 11 21" stroke={goldColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M8 37 C5.5 35 6.5 32.5 9 34 Z M6 31 C3.5 29 4.5 26.5 7 28 Z M7 25 C5 22.5 7 20.5 9 23 Z" fill={goldColor} />

      {/* Right Olive / Floral Leaf Wreath */}
      <path d="M49 43 C54 37 54 27 49 21" stroke={goldColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M52 37 C54.5 35 53.5 32.5 51 34 Z M54 31 C56.5 29 55.5 26.5 53 28 Z M53 25 C55 22.5 53 20.5 51 23 Z" fill={goldColor} />
    </svg>
  );
}
