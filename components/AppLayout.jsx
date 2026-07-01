'use client';
import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    return (
      <main style={{ height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </main>
    );
  }

  return (
    <SmoothScrolling>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </SmoothScrolling>
  );
}
