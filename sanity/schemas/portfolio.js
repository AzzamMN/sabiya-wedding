export default {
  name: 'portfolio',
  title: 'Galeri Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Foto / Acara',
      type: 'string',
      validation: (Rule) => Rule.required().error('Judul foto wajib diisi'),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Dekorasi', value: 'Dekorasi' },
          { title: 'MUA & Gaun', value: 'MUA & Gaun' },
          { title: 'Dokumentasi', value: 'Dokumentasi' },
          { title: 'Tradisi / Siraman', value: 'Tradisi' },
        ],
        layout: 'radio',
      },
      initialValue: 'Dekorasi',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Foto Acara',
      type: 'image',
      options: {
        hotspot: true, // memungkinkan pemotongan gambar otomatis (crop/hotspot)
      },
      validation: (Rule) => Rule.required().error('Foto wajib diunggah'),
    },
    {
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 3,
      description: 'Jelaskan sedikit detail tema atau lokasi acara',
    },
    {
      name: 'date',
      title: 'Tanggal Acara',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
};
