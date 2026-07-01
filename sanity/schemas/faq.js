export default {
  name: 'faq',
  title: 'Tanya Jawab (FAQ)',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Pertanyaan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Jawaban',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Urutan Tampilan (Angka)',
      type: 'number',
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
    },
  },
};
