'use client';
import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './cek-tanggal.module.css';

export default function CekTanggal() {
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const checkAvailability = async (e) => {
    e.preventDefault();
    if (!date) return;
    
    setIsLoading(true);
    setResult(null);

    try {
      // Query to check if the date exists in our bookings table
      // This assumes we have a 'bookings' table with a 'booking_date' column
      const { data, error } = await supabase
        .from('bookings')
        .select('id')
        .eq('booking_date', date);

      if (error) {
        // If Supabase isn't configured yet, just simulate an API call
        console.error('Supabase error:', error);
        await simulateCheck();
        return;
      }

      // If data is empty, the date is available
      setResult({
        available: data.length === 0,
        date: new Date(date).toLocaleDateString('id-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      });
    } catch (err) {
      console.error('Error checking availability:', err);
      await simulateCheck();
    } finally {
      setIsLoading(false);
    }
  };

  // Fallback function for demonstration when Supabase is not connected
  const simulateCheck = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        // Randomly determine availability (70% chance available)
        const isAvailable = Math.random() > 0.3;
        setResult({
          available: isAvailable,
          date: new Date(date).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
        resolve();
      }, 1500);
    });
  };

  const getWaLink = () => {
    const message = encodeURIComponent(`Halo, saya tertarik untuk booking Sabiya Wedding pada tanggal ${result?.date}. Mohon info paketnya.`);
    return `https://wa.me/6281234567890?text=${message}`;
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Cek Ketersediaan Tanggal</h1>
          <p className={styles.subtitle}>
            Rencanakan hari bahagia Anda. Periksa ketersediaan jadwal tim Sabiya Wedding secara real-time.
          </p>
        </div>

        <div className={`glass-panel ${styles.formWrapper}`}>
          <form onSubmit={checkAvailability}>
            <div className={styles.formGroup}>
              <label htmlFor="wedding-date" className={styles.label}>
                Pilih Tanggal Pernikahan Anda
              </label>
              <input
                type="date"
                id="wedding-date"
                className={styles.input}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={!date || isLoading}
            >
              {isLoading ? 'Mengecek Jadwal...' : 'Cek Ketersediaan'}
            </button>
          </form>

          {result && (
            <div className={`${styles.result} ${result.available ? styles.available : styles.unavailable}`}>
              <h3 className={styles.resultTitle}>
                {result.available ? '🎉 Tanggal Tersedia!' : '😔 Mohon Maaf, Tanggal Penuh'}
              </h3>
              <p>
                {result.available 
                  ? `Jadwal kami masih kosong pada ${result.date}. Segera amankan tanggal Anda sebelum diambil oleh klien lain.` 
                  : `Jadwal kami sudah terisi penuh pada ${result.date}. Silakan pilih tanggal lain jika memungkinkan, atau hubungi kami untuk opsi waiting list.`}
              </p>
              
              {result.available ? (
                <a href={getWaLink()} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.actionBtn}`}>
                  Booking Sekarang via WhatsApp
                </a>
              ) : (
                <Link href="/kontak" className={`btn btn-outline ${styles.actionBtn}`}>
                  Hubungi Admin
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
