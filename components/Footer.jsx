import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo-link">
            <Logo variant="dark" className="footer-logo" />
          </Link>
          <p className="footer-desc">
            Mewujudkan hari bahagia Anda dengan sentuhan dekorasi premium dan riasan makeup elegan.
          </p>
        </div>

        <div className="footer-links">
          <h3>Layanan</h3>
          <ul>
            <li><Link href="/#layanan">Dekorasi Pernikahan</Link></li>
            <li><Link href="/#layanan">Make Up Artist (MUA)</Link></li>
            <li><Link href="/#layanan">Paket All-in</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Perusahaan</h3>
          <ul>
            <li><Link href="/#tentang">Tentang Kami</Link></li>
            <li><Link href="/#portfolio">Portfolio</Link></li>
            <li><Link href="/#blog">Blog & Inspirasi</Link></li>
            <li><Link href="/kontak">Hubungi Kami</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Kontak</h3>
          <p>📍 Jl. Contoh Raya No. 123, Jakarta</p>
          <p>📞 +62 812 3456 7890</p>
          <p>✉️ halo@sabiyawedding.com</p>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {currentYear} Sabiya Wedding Decoration. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--color-charcoal-light);
          color: var(--color-white);
          padding: var(--space-10) 0 var(--space-4);
          margin-top: var(--space-16);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: var(--space-6);
          margin-bottom: var(--space-8);
        }

        .logo-link {
          display: inline-flex;
          align-items: center;
          margin-bottom: var(--space-3);
          height: 55px;
        }

        .footer-desc {
          color: rgba(255, 255, 255, 0.8);
          max-width: 300px;
        }

        h3 {
          color: var(--color-gold);
          font-size: 1.125rem;
          margin-bottom: var(--space-4);
        }

        ul {
          list-style: none;
        }

        li {
          margin-bottom: var(--space-2);
        }

        li a {
          color: rgba(255, 255, 255, 0.8);
        }

        li a:hover {
          color: var(--color-gold-light);
        }

        .footer-contact p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: var(--space-2);
        }

        .footer-bottom {
          text-align: center;
          padding-top: var(--space-4);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--space-5);
          }
        }
      `}</style>
    </footer>
  );
}
