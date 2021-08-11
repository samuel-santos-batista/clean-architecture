import { Express } from 'express'
import { bodyParser, contentType, cors } from '../middlawares'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}