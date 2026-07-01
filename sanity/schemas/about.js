export default {
  name: 'about',
  title: 'Halaman Tentang Kami & Filosofi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Utama (Kisah Kami)',
      type: 'string',
      initialValue: 'Kisah Kami',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subjudul Singkat',
      type: 'string',
      initialValue: 'Menciptakan momen magis yang abadi, satu pernikahan pada satu waktu.',
    },
    {
      name: 'heroImage',
      title: 'Foto Latar Sampul Halaman Tentang Kami',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'philosophyTitle',
      title: 'Judul Bagian Filosofi',
      type: 'string',
      initialValue: 'Filosofi Sabiya',
    },
    {
      name: 'philosophyImage',
      title: 'Foto Filosofi Sabiya Wedding',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'philosophyText1',
      title: 'Teks Filosofi Paragraf 1',
      type: 'text',
      rows: 3,
      initialValue: 'Berawal dari sebuah mimpi kecil untuk merayakan cinta dalam bentuknya yang paling murni. Sabiya Wedding lahir dari keyakinan bahwa setiap kisah cinta adalah mahakarya yang unik, yang layak diceritakan dengan keanggunan, detail, dan keindahan.',
    },
    {
      name: 'philosophyText2',
      title: 'Teks Filosofi Paragraf 2',
      type: 'text',
      rows: 3,
      initialValue: 'Kami memadukan sentuhan klasik dengan tren modern, memastikan bahwa riasan dan busana yang Anda kenakan tidak hanya membuat Anda tampil memesona, namun juga memancarkan karakter asli Anda.',
    },
    {
      name: 'quote',
      title: 'Kutipan Pemanis (Quote)',
      type: 'string',
      initialValue: '"Bukan sekadar merias wajah, tapi menonjolkan pancaran kebahagiaan dari dalam jiwa."',
    },
  ],
};
