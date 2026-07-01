'use client';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schema';
import { apiVersion, dataset, projectId } from './sanity/env';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Sabiya Wedding CMS')
          .items([
            S.listItem()
              .title('⚙️ Pengaturan Web & Kontak')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Pengaturan Web & Kontak')
              ),
            S.listItem()
              .title('📖 Halaman Tentang & Filosofi')
              .id('about')
              .child(
                S.document()
                  .schemaType('about')
                  .documentId('about')
                  .title('Halaman Tentang Kami')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !['siteSettings', 'about'].includes(item.getId())
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  title: 'Sabiya Wedding Admin Studio',
});
