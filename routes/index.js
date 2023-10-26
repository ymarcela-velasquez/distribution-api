import express from 'express'

import customers from './customersEndpoints.js'
import products from './productsEndpoints.js'
import orders from './ordersEndpoints.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Api core... Ok!')
})

router.use('/customers', customers)
router.use('/products', products)
router.use('/orders', orders)

export { router }
