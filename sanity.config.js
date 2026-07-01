'use client';
import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schema';
import { apiVersion, dataset, projectId } from './sanity/env';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  title: 'Sabiya Wedding Admin Studio',
});
