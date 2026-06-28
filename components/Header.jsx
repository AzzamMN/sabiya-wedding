'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, hash) => {
    setIsMobileMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(hash);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled glass-panel' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo-link">
          <Logo variant="light" className="header-logo" />
        </Link>
        
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/#beranda" onClick={(e) => handleNavClick(e, '#beranda')}>Beranda</Link>
          <Link href="/#layanan" onClick={(e) => handleNavClick(e, '#layanan')}>Layanan & Harga</Link>
          <Link href="/#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</Link>
          <Link href="/#tentang" onClick={(e) => handleNavClick(e, '#tentang')}>Tentang Kami</Link>
          <Link href="/#blog" onClick={(e) => handleNavClick(e, '#blog')}>Blog</Link>
          <Link href="/cek-tanggal" className="btn btn-primary nav-btn" onClick={() => setIsMobileMenuOpen(false)}>
            Cek Tanggal
          </Link>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all var(--transition-normal);
          padding: var(--space-4) 0;
        }

        .header-scrolled {
          padding: var(--space-2) 0;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-link {
          display: flex;
          align-items: center;
          height: 45px;
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: var(--space-5);
        }

        .main-nav a:not(.btn) {
          font-weight: 500;
        }

        .main-nav a:not(.btn):hover {
          color: var(--color-gold);
        }

        .mobile-menu-btn {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
            width: 30px;
            height: 24px;
            position: relative;
            z-index: 1001;
          }

          .hamburger {
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--text-primary);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            transition: all var(--transition-fast);
          }

          .hamburger::before, .hamburger::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--text-primary);
            transition: all var(--transition-fast);
          }

          .hamburger::before { top: -8px; }
          .hamburger::after { bottom: -8px; }

          .hamburger.open { background-color: transparent; }
          .hamburger.open::before {
            top: 0;
            transform: rotate(45deg);
          }
          .hamburger.open::after {
            bottom: 0;
            transform: rotate(-45deg);
          }

          .main-nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: 100vh;
            background-color: var(--bg-primary);
            flex-direction: column;
            justify-content: center;
            padding: var(--space-5);
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            transition: right var(--transition-normal);
            z-index: 1000;
          }

          .main-nav.open {
            right: 0;
          }
        }
      `}</style>
    </header>
  );
}
