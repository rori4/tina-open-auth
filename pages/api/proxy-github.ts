import { apiProxy } from 'next-tinacms-github'
import { cors } from '../../lib/cors'

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
  apiProxy(process.env.SIGNING_KEY)(req, res)
}
