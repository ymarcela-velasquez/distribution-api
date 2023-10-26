import dotenv from 'dotenv'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

let config = {}
const envPath = resolve(__dirname, './../.env')

switch (process.env.APP_ENV) {
  case 'test':
    config = {
      namespace: 'TEST_',
      environment: 'test',
      port: 3000,
      dbPort: 3001,
      dbDatabase: 'postgres',
      dbUsername: 'postgres',
      dbPassword: 'postgres',
      dbHost: 'localhost',
    }
    break
  case 'development':
    dotenv.config({ path: envPath })
    config = {
      namespace: 'DEV_',
      environment: 'development',
      port: process.env.PORT ?? 4000,
      dbPort: process.env.DB_PORT ?? 4001,
      dbDatabase: process.env.DB_DATABASE ?? 'postgres',
      dbUsername: process.env.DB_USERNAME ?? 'postgres',
      dbPassword: process.env.DB_PASSWORD ?? 'postgres',
      dbHost: process.env.DB_HOST ?? 'localhost',
    }
    break
    
}

/**
 * @type {{
*   namespace: string,
*   environment: string,
*   port: number,
*   logLevel: string,
*   enableLogFiles: boolean,
*   enableLogStdout: boolean
* }}
*
*/

export { config }
