'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './admin.module.css';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [newDate, setNewDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('booking_date', { ascending: true });
        
      if (error) throw error;
      setBookings(data || []);
    } catch (err) {
      console.warn('Error fetching bookings:', err);
      // Fallback dummy data if Supabase isn't configured
      setBookings([
        { id: 1, booking_date: '2026-08-15', client_name: 'Anisa & Budi', status: 'confirmed' },
        { id: 2, booking_date: '2026-09-20', client_name: 'Citra & Deni', status: 'confirmed' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddBooking = async (e) => {
    e.preventDefault();
    if (!newDate || !clientName) return;

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([{ booking_date: newDate, client_name: clientName, status: 'confirmed' }]);

      if (error) throw error;
      
      setNewDate('');
      setClientName('');
      fetchBookings();
    } catch (err) {
      console.warn('Error adding booking:', err);
      alert('Gagal menambahkan jadwal. Pastikan Supabase sudah terkonfigurasi dengan benar.');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Hapus jadwal ini?')) return;
    
    try {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      fetchBookings();
    } catch (err) {
      console.warn('Error deleting booking:', err);
      alert('Gagal menghapus jadwal.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.title}>Dashboard Admin</h1>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Tambah Jadwal Terisi</h2>
        <form onSubmit={handleAddBooking} className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nama Klien</label>
            <input 
              type="text" 
              className={styles.input} 
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Contoh: Anisa & Budi"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Tanggal Booking</label>
            <input 
              type="date" 
              className={styles.input}
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
            Simpan
          </button>
        </form>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Daftar Tanggal Terisi (Booked)</h2>
        
        {isLoading ? (
          <p>Memuat data...</p>
        ) : bookings.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Klien</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>
                    {new Date(booking.booking_date).toLocaleDateString('id-ID', {
                      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
                    })}
                  </td>
                  <td>{booking.client_name}</td>
                  <td>
                    <span style={{ background: '#d1e7dd', color: '#0f5132', padding: '2px 8px', borderRadius: '12px', fontSize: '12px' }}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(booking.id)} className={styles.actionBtn}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.emptyState}>
            <p>Belum ada jadwal yang terisi.</p>
          </div>
        )}
      </div>
    </div>
  );
}
