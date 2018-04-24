import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import jwt from 'koa-jwt'
import json from 'koa-json'
import cors from 'kcors'
import { port, jwt_secret, getErr } from '../config'

const app = new Koa()

app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}))

app.use(cors())

app.use(json())

app.use(jwt(
  { secret: jwt_secret }
)
.unless(
  {
    path: [
      /^\/api\/login/, /^\/api\/register/
    ]
  }
))

app.use(logger())

app.use(async(ctx, next) => {
  try {
    await next()
  } catch (e) {
    e.code = e.code || ctx.status.code
    ctx.body = getErr(e)
  }
})

app.use()

app.listen(port)