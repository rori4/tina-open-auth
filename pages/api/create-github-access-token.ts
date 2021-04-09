import { createAuthHandler } from 'next-tinacms-github'
import { cors } from '../../lib/cors'

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
  createAuthHandler(
    process.env.GITHUB_CLIENT_ID || '',
    process.env.GITHUB_CLIENT_SECRET || '',
    process.env.SIGNING_KEY || ''
  )(req, res)
}
