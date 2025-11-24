import { promises as fs } from 'fs'
import { join } from 'path'

export default defineEventHandler(async () => {
  const file = join(process.cwd(), 'src/server/data/user.json')
  const data = await fs.readFile(file, 'utf-8')
  return JSON.parse(data)
})
