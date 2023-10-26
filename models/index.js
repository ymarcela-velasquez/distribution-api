import { Sequelize } from 'sequelize'
import dbConfigPromise from '../config/database.cjs'

import CustomerModel from './customer.js'
import ProductModel from './product.js'
import OrderModel from './order.js'

// Top level await is now supported in node > 14
// https://github.com/tc39/proposal-top-level-await
const dbConfig = await dbConfigPromise

const sequelize = new Sequelize(dbConfig)

const db = {}
const models = [CustomerModel, ProductModel, OrderModel]
  
for (const modelFn of models) {
  const model = modelFn(sequelize, Sequelize.DataTypes)
  db[model.name] = model
}

for (const modelName in db) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
}

db.sequelize = sequelize

export default db
