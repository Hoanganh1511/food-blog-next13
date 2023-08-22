import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import { defaultDocumentNode } from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'TUANANHDEV_blog',
  title: 'TUANANHDEV Blog',
  projectId: 'dw3ywes1',
  dataset: 'production',

  plugins: [deskTool({}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
