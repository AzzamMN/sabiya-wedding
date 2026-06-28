export const metadata = {
  title: 'Admin Panel | Sabiya Wedding',
  description: 'Sabiya Wedding Admin Dashboard',
};

export default function AdminLayout({ children }) {
  // In a real app, you'd add authentication here
  return (
    <div className="admin-wrapper" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingTop: '80px' }}>
      {children}
    </div>
  );
}
