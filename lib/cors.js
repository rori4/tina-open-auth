import Cors from 'cors'

import { initMiddleware } from './middleware'

export const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: '*',
  })
)
