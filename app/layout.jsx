import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sabiya Wedding Decoration | Mewujudkan Pernikahan Impian Anda",
  description: "Layanan jasa wedding decoration dan MUA (Make Up Artist) premium dengan harga terjangkau untuk pernikahan berkesan Anda.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <SmoothScrolling>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScrolling>
      </body>
    </html>
  );
}
