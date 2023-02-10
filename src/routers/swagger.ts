import Router from 'koa-router'
import { Context } from 'koa'
import swaggerJSDoc from '../config/swagger'

const routerInit = new Router()

routerInit.get('/docs', (ctx: Context) => {
  ctx.body = swaggerJSDoc
})

export default routerInit