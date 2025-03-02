import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { markdownSchema } from 'sanity-plugin-markdown'

import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio-admin',

  projectId: '6qw0f5bi',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
