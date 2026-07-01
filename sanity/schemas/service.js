export default {
  name: 'service',
  title: 'Layanan & Harga Paket',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nama Paket / Layanan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startingPrice',
      title: 'Harga Mulai (Tanpa Rp / Titik)',
      type: 'string',
      description: 'Contoh: 5000000 atau 15000000 (Sistem akan otomatis memformat ke dalam Rupiah)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 2,
    },
    {
      name: 'features',
      title: 'Daftar Fitur / Item yang Didapat',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'isPopular',
      title: 'Tandai sebagai "Paket Terlaris"?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Urutan Tampilan',
      type: 'number',
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'startingPrice',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Mulai Rp ${Number(subtitle).toLocaleString('id-ID')}` : '',
      };
    },
  },
};
