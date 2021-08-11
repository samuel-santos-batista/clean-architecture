import { Express } from 'express'
import { bodyParser } from '../middlawares/body-parser'
import { cors } from '../middlawares/cors'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}