export default {
  name: 'siteSettings',
  title: 'Pengaturan Web & Kontak',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nama Bisnis / Brand',
      type: 'string',
      initialValue: 'Sabiya Wedding Decoration',
    },
    {
      name: 'slogan',
      title: 'Slogan Utama',
      type: 'string',
      initialValue: 'Mewujudkan Pernikahan Impian Anda',
    },
    {
      name: 'whatsapp',
      title: 'Nomor WhatsApp (Tanpa tanda + / spasi)',
      type: 'string',
      description: 'Contoh: 6281234567890 (Gunakan awalan 62 untuk kode negara Indonesia)',
      initialValue: '6281234567890',
    },
    {
      name: 'email',
      title: 'Alamat Email Resmi',
      type: 'string',
      initialValue: 'info@sabiyawedding.com',
    },
    {
      name: 'instagram',
      title: 'Username / Link Instagram',
      type: 'string',
      initialValue: '@sabiyawedding',
    },
    {
      name: 'address',
      title: 'Alamat Kantor / Galeri',
      type: 'text',
      rows: 2,
      initialValue: 'Jl. Raya Utama No. 123, Bandung, Jawa Barat',
    },
    {
      name: 'heroTitle',
      title: 'Judul Utama Beranda (Hero Title)',
      type: 'string',
      initialValue: 'Mewujudkan Pernikahan Impian Anda',
    },
    {
      name: 'heroSubtitle',
      title: 'Subjudul Beranda (Hero Subtitle)',
      type: 'text',
      rows: 3,
      initialValue: 'Layanan dekorasi pernikahan dan MUA premium yang mengubah momen spesial Anda menjadi kenangan keemasan abadi.',
    },
    {
      name: 'heroImage',
      title: 'Foto Latar Belakang Beranda (Hero Background)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'whatsapp',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Pengaturan Web',
        subtitle: `WhatsApp: ${subtitle || '-'}`,
      };
    },
  },
};
