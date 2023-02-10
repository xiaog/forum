import path from 'node:path'
import swaggerJSDoc from 'swagger-jsdoc'
import AddressIp from 'ip'
import { PORT } from './constant'

const swaggerDefinition = {
  info: {
    // API informations (required)
    title: 'multi-channel forum', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'multi-channel forum', // Description (optional)
  },
  host: `${AddressIp.address()}:${PORT}`, // Host (optional)
  basePath: '/', // Base path (optional)
}

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../routers/*.ts')], // all api
}

const jsonSpc = swaggerJSDoc(options)
export default jsonSpc