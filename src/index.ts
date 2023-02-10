import Koa from 'koa'
import BodyParser from 'koa-bodyparser'
import Static from 'koa-static'
import Cors from 'koa2-cors'
import Path from 'node:path'
import KoaBody from 'koa-body'
import AddressIP from 'ip'
import Channel from './routers/channel'
import Swagger from './routers/swagger'
import { koaSwagger } from 'koa2-swagger-ui'
import { loggerMiddleware } from './middlewares/logger'
import { errorHandler, responseHandler } from './middlewares/response'
import { corsHandler } from './middlewares/cors'

const source = Static(`${Path.join(__dirname)}/public`)

import { PORT } from './config/constant'

const app = new Koa()

// Logger
app.use(loggerMiddleware)

// Error Handler
app.use(errorHandler)

app.use(
  KoaBody({
    // 支持文件格式
    multipart: true,
    formidable: {
      // 上传目录
      uploadDir: Path.join(__dirname, '../public/uploads'),
      // 保留文件扩展名
      keepExtensions: true,
    },
  })
)

// ctx.body
app.use(BodyParser())

app.use(Cors(corsHandler))

// 静态资源
app.use(source)

// swagger
app.use(
  koaSwagger({
    routePrefix: '/swagger',
    swaggerOptions: {
      url: '/docs',
    },
  })
)

// 路由
app.use(Channel.routes()).use(Channel.allowedMethods())
app.use(Swagger.routes()).use(Swagger.allowedMethods())

// Error Handler
app.use(responseHandler)

app.listen(PORT, () => {
  console.log(`http://${AddressIP.address()}:${PORT} 已启动`)
})

module.exports = app