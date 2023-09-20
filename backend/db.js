import { Sequelize } from 'sequelize'
import { config } from './config/environment.js'
import dbConfigPromise from './config/database.cjs'
// Top level await is now supported in node > 14
// https://github.com/tc39/proposal-top-level-await
const dbConfig = await dbConfigPromise

class DB {
  constructor() {
    if (!DB.sequelize) {
      this.dbConfig = dbConfig
      this.sequelize = new Sequelize(dbConfig)
    }
  }

  async __connectionTest() {
    await this.sequelize.authenticate()
    console.log(`[Postgres]: connected to ${dbConfig.database} DB on port ${config.dbPort} and host ${config.dbHost}`)
  }
}

let dbInstance
const dbConnection = async () => {
  if (!dbInstance) dbInstance = new DB()
  try {
    await dbInstance.__connectionTest()
    return dbInstance.sequelize
  } catch (err) {
    throw new Error(err)
  }
}

export { dbConnection }
