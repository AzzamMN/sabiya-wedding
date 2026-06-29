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

  const isHomePage = pathname === '/';
  const useTransparentStyle = isHomePage && !isScrolled;

  return (
    <header className={`header ${useTransparentStyle ? 'header-top' : 'header-scrolled glass-panel'}`}>
      <div className="container header-container">
        <Link href="/" className="logo-link">
          <Logo variant={useTransparentStyle ? 'dark' : 'light'} height="45px" />
        </Link>
        
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''} ${useTransparentStyle ? 'nav-light' : 'nav-dark'}`}>
          <Link href="/#beranda" className="nav-link" onClick={(e) => handleNavClick(e, '#beranda')}>Beranda</Link>
          <Link href="/#layanan" className="nav-link" onClick={(e) => handleNavClick(e, '#layanan')}>Layanan & Harga</Link>
          <Link href="/#portfolio" className="nav-link" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</Link>
          <Link href="/#tentang" className="nav-link" onClick={(e) => handleNavClick(e, '#tentang')}>Tentang Kami</Link>
          <Link href="/#blog" className="nav-link" onClick={(e) => handleNavClick(e, '#blog')}>Blog</Link>
          <Link href="/cek-tanggal" className="btn btn-primary nav-btn" onClick={() => setIsMobileMenuOpen(false)}>
            Cek Tanggal
          </Link>
        </nav>

        <button 
          className={`mobile-menu-btn ${!useTransparentStyle || isMobileMenuOpen ? 'btn-dark' : 'btn-light'}`} 
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

        :global(.header-logo) {
          height: 100%;
          width: auto;
          display: block;
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: var(--space-5);
        }

        :global(.nav-link) {
          font-weight: 500;
          transition: color var(--transition-fast), text-shadow var(--transition-fast);
        }

        .main-nav.nav-light :global(.nav-link) {
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }

        .main-nav.nav-dark :global(.nav-link) {
          color: var(--text-primary);
          text-shadow: none;
        }

        :global(.nav-link:hover) {
          color: var(--color-gold) !important;
        }

        .mobile-menu-btn {
          display: none;
        }

        @media (max-width: 768px) {
          .main-nav.nav-light :global(.nav-link),
          .main-nav.nav-dark :global(.nav-link) {
            color: var(--text-primary) !important;
            text-shadow: none !important;
          }

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
            transition: all var(--transition-fast);
          }

          .btn-light .hamburger,
          .btn-light .hamburger::before,
          .btn-light .hamburger::after {
            background-color: white;
          }

          .btn-dark .hamburger,
          .btn-dark .hamburger::before,
          .btn-dark .hamburger::after {
            background-color: var(--text-primary);
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
