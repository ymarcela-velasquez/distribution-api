import express from 'express'

import { router } from './routes/index.js'
import { config } from './config/environment.js'
import { dbConnection } from './db.js'

// Configure express server
const app = express()
app.use(express.json())

// Set express routes
app.use(router)

try {
  await dbConnection()
} catch (err) {
  console.log({ message: err.message, stack: err.stack, name: 'Fatal Error' })
  process.exit(1)
}

app.listen(config.port, async () => {
  console.log(`[Express] Server running on port ${config.port}`)
})
