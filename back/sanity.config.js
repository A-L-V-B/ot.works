import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'
import deskStructure from './src/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'ot.works',

  projectId: '6hr2f37r',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
