export default {
  name: 'team',
  title: 'Anggota Tim (MUA, Stylist, Founder)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Anggota Tim',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Posisi / Jabatan (Contoh: Lead Makeup Artist)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Foto Profil',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'bio',
      title: 'Biografi Singkat',
      type: 'text',
      rows: 3,
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
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
};
