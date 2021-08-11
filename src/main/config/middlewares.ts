import { Express } from 'express'
import { bodyParser } from '../middlawares/body-parser'

export default (app: Express): void => {
  app.use(bodyParser)
}