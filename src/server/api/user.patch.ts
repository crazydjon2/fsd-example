import { promises as fs } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const file = join(process.cwd(), 'src/server/data/user.json')
  const raw = await fs.readFile(file, 'utf-8')
  const data = JSON.parse(raw)

  const updated = { ...data, ...body }

  await fs.writeFile(file, JSON.stringify(updated, null, 2))

  return updated
})
