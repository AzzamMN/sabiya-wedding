'use client';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/client';

const defaultFaqs = [
  {
    question: "Bagaimana sistem pembayaran untuk pemesanan dekorasi di Sabiya Wedding?",
    answer: "Sistem pembayaran kami sangat fleksibel dan aman. Cukup dengan DP (Down Payment) sebesar 30% untuk mengunci tanggal acara Anda, pembayaran termin kedua 30% pada H-30, dan pelunasan sisa 40% maksimal H-7 sebelum hari H pernikahan."
  },
  {
    question: "Apakah harga paket sudah termasuk biaya bongkar pasang dan transportasi?",
    answer: "Ya, betul sekali! Seluruh paket dekorasi dan MUA kami sudah ALL-IN mencakup biaya transportasi tim, pengiriman properti, pemasangan (loading), hingga pembongkaran (unloading) untuk wilayah Jabodetabek dan Bandung Raya."
  },
  {
    question: "Berapa lama sebelum acara sebaiknya kami memesan tanggal?",
    answer: "Kami sangat menyarankan pemesanan minimal 3 hingga 6 bulan sebelum hari H untuk mengamankan slot tanggal, terutama untuk tanggal-tanggal cantik atau musim pernikahan (wedding season). Namun, jika slot masih tersedia, kami juga melayani pemesanan cepat (last minute booking)."
  },
  {
    question: "Apakah kami bisa request custom palet warna atau jenis bunga?",
    answer: "Tentu saja! Keunggulan utama Sabiya Wedding adalah fleksibilitas desain. Anda bebas berkonsultasi untuk menyesuaikan warna tema, jenis bunga segar (fresh flowers) atau artificial premium, hingga model kursi dan lampu hias sesuai konsep impian Anda tanpa biaya tersembunyi."
  }
];

export default function FAQ() {
  const [faqs, setFaqs] = useState(defaultFaqs);
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  useEffect(() => {
    client.fetch('*[_type == "faq"] | order(order asc, _createdAt asc){question, answer}').then(data => {
      if (data && data.length > 0) {
        setFaqs(data);
      }
    }).catch(err => console.error("Error fetching FAQs:", err));
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: 'var(--space-12) 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center reveal">
          <h2 className="section-title">Tanya Jawab <span className="text-gold">(FAQ)</span></h2>
          <p className="section-subtitle">
            Temukan jawaban untuk pertanyaan yang paling sering diajukan calon pengantin kepada tim Sabiya Wedding.
          </p>
        </div>

        <div style={{ marginTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="glass-panel"
                style={{ 
                  padding: 'var(--space-4) var(--space-5)', 
                  cursor: 'pointer',
                  border: isOpen ? '1px solid var(--color-gold)' : '1px solid var(--border-light)',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 10px 25px -5px rgba(212, 175, 55, 0.15)' : 'var(--shadow-sm)'
                }}
                onClick={() => toggleAccordion(idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: isOpen ? 'var(--color-gold)' : 'var(--text-primary)', margin: 0 }}>
                    {faq.question}
                  </h3>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    color: 'var(--color-gold)', 
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    lineHeight: 1
                  }}>
                    +
                  </span>
                </div>
                {isOpen && (
                  <p style={{ 
                    marginTop: 'var(--space-3)', 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7', 
                    fontSize: '0.98rem',
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: 'var(--space-3)',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
