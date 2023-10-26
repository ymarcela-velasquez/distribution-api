import models from './../models/index.js'
import {
  createService,
  readByIdService,
  readAllService,
  updateService,
  deleteService,
} from './ordersServices.js'

const { sequelize, Order, Product, Customer } = models

const orderBody = {
  quantity: 5,
  resquestDate: '2023-09-23',
  deliveryDate: '2023-09-24',
  address: 'CL 45 56 45',
  postalCode: '05001'
}

const productBody = {
  name: 'Naranjas',
  description: 'Cosecha #2',
  quantity: 3
}

const customerBody = {
  identification: '123456',
  name: 'Pepito Perez',
  address: 'CL 45 # 70 - 85',
  phone: '2345647',
  email: 'email@gmail.com',
}

afterEach(() => {
  try {
    return Promise.all(
      [Order, Product, Customer].map((model) =>
        model.truncate({ restartIdentity: true, force: true, cascade: true })
      )
    )
  } catch (e) {
    throw Error(e)
  }
})

afterAll(() => {
  try {
    return sequelize.close()
  } catch (e) {
    throw Error(e)
  }
})

describe('Order services', () => {
  describe('createService', () => {
    test('should create an order', async () => {
      const { id: productId } = await Product.create(productBody)
      const { id: customerId } = await Customer.create(customerBody)
      const order = await createService({ ...orderBody, productId, customerId })
      expect(order).toBeInstanceOf(Order)
    })
  })

  describe('readByIdService', () => {
    test('should search an order by id', async () => {
      const { id: productId } = await Product.create(productBody)
      const { id: customerId } = await Customer.create(customerBody)
      const { id: orderId } = await Order.create({ ...orderBody, productId, customerId })
      expect(await readByIdService(orderId)).toBeInstanceOf(Order)
    })
  })

  describe('readAllService', () => {
    test('should return all orders', async () => {
      const { id: productId } = await Product.create(productBody)
      const { id: customerId } = await Customer.create(customerBody)
      await Order.create({ ...orderBody, productId, customerId })
      await Order.create({ ...orderBody, productId, customerId })
      expect(await readAllService()).toHaveLength(2)
    })
  })

  describe('updateService', () => {
    test('should update an order', async () => {
      const { id: productId } = await Product.create(productBody)
      const { id: customerId } = await Customer.create(customerBody)
      const { id: orderId } = await Order.create({ ...orderBody, productId, customerId })
      const orderBodyModified = Object.assign(orderBody)
      orderBodyModified.name = 'Carolina Suarez'
      const orderUpdated = await updateService(orderId, orderBodyModified)
      expect(await Order.findByPk(orderId)).toStrictEqual(orderUpdated)
    })
  })

  describe('deleteService', () => {
    test('should delete an order', async () => {
      const { id: productId } = await Product.create(productBody)
      const { id: customerId } = await Customer.create(customerBody)
      const { id: orderId } = await Order.create({ ...orderBody, productId, customerId })
      const orderDeleted = await deleteService(orderId)
      expect(orderDeleted.deletedAt).not.toBeNull()
    })
  })
})
