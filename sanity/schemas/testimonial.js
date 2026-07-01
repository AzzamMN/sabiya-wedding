export default {
  name: 'testimonial',
  title: 'Testimoni Klien',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Klien / Pengantin',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Keterangan Acara',
      type: 'string',
      initialValue: 'Pengantin Akad & Resepsi',
    },
    {
      name: 'comment',
      title: 'Isi Testimoni / Ulasan',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Foto Pengantin (Opsional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rating',
      title: 'Rating Bintang (1 - 5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'comment',
      media: 'photo',
    },
  },
};
