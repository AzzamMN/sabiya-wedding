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

  const textColor = variant === 'light' ? '#1c1d21' : '#ffffff';
  const goldColor = '#d4af37';

  if (logoUrl) {
    return (
      <img 
        src={logoUrl} 
        alt="Sabiya Wedding Logo" 
        className={className}
        style={{ height, width: 'auto', objectFit: 'contain', display: 'block' }}
      />
    );
  }

  return (
    <svg 
      className={className} 
      viewBox="10 5 150 45"
      style={{ height, width: 'auto', display: 'block' }}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Decorative Floral / Leaf Element */}
      <path d="M26 15C32 10 38 18 38 18C38 18 32 23 26 15Z" fill={goldColor} opacity="0.8"/>
      <path d="M38 18C44 14 47 22 47 22C47 22 40 26 38 18Z" fill={goldColor} opacity="0.6"/>
      <path d="M22 28C27 24 35 28 35 28C35 28 27 34 22 28Z" fill={goldColor} opacity="0.9"/>
      
      {/* Monogram 'S' */}
      <text 
        x="15" 
        y="42" 
        fontFamily="Times New Roman, serif" 
        fontSize="40" 
        fill={goldColor} 
        fontWeight="bold" 
        fontStyle="italic"
      >
        S
      </text>

      {/* Brand Name */}
      <text 
        x="55" 
        y="30" 
        fontFamily="Arial, sans-serif" 
        fontSize="20" 
        fill={textColor} 
        fontWeight="600" 
        letterSpacing="3"
      >
        SABIYA
      </text>
      
      <text 
        x="56" 
        y="45" 
        fontFamily="Arial, sans-serif" 
        fontSize="11" 
        fill={textColor} 
        letterSpacing="5"
        opacity="0.8"
      >
        WEDDING
      </text>
    </svg>
  );
}
