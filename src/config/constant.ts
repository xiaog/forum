import path from 'node:path'

export const PORT = 6200
import {fileURLToPath} from 'url';

export const LogPath = path.resolve(__dirname, '../../logs/koa.log')

export const JwtWhileList = [
  /docs/,
]