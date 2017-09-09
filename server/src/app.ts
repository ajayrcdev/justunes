import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as helmet from 'helmet'

import api from './api'

import { Application } from 'express'

const app: Application = express()

app
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(helmet())
  .use(api)

export default app
