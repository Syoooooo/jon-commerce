import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ecommerce youtube best',

  projectId: 'p2i1dusq',
  dataset: 'prduction',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
