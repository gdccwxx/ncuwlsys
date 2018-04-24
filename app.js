const Koa = require('koa')
const app = new Koa()
const config = require('./config')
const json = require('koa-json')
const jwt = require('koa-jwt')
const logger = require('koa-logger')
const cors = require('kcors')
const bodyparser = require('koa-bodyparser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect(config.mongodb, {useMongoClient:true})

const index = require('./routes/index')

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(cors())
app.use(json())
app.use(jwt({secret: config.jwt_secret}).unless({path:[/^\/api\/login/, /^\/api\/register/]}))
app.use(logger())

app.use(async(ctx, next) => {
  try{
    await next()
  }catch(e){
    e.code = e.code || ctx.status.code
    ctx.body = config.getErr(e)
  }
})

app.use(index.routes(), index.allowedMethods())

const port = process.env.port || config.port
app.listen(port)
