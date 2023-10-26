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
  requestDate: '2023-09-23',
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
      [Order].map((model) =>
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
    xtest('should create a order', async () => {
      const { id: productId } = await Product.create(productBody)
      const { id: customerId } = await Customer.create(customerBody)
      const order = await createService({ ...orderBody, productId, customerId })
      expect(order).toBeInstanceOf(Order)
    })
  })

  describe('readByIdService', () => {
    xtest('should search a order by id', async () => {
      const { id: orderId } = await Order.create(orderBody)
      expect(await readByIdService(orderId)).toBeInstanceOf(Order)
    })
  })

  describe('readAllService', () => {
    xtest('should return all orders', async () => {
      await Order.create(orderBody)
      await Order.create(orderBody)
      expect(await readAllService()).toHaveLength(2)
    })
  })

  describe('updateService', () => {
    xtest('should update a order', async () => {
      const { id: orderId } = await Order.create(orderBody)
      const orderBodyModified = Object.assign(orderBody)
      orderBodyModified.name = 'Carolina Suarez'
      const orderUpdated = await updateService(orderId, orderBodyModified)
      expect(await Order.findByPk(orderId)).toStrictEqual(orderUpdated)
    })
  })

  describe('deleteService', () => {
    xtest('should delete a order', async () => {
      const { id: orderId } = await Order.create(orderBody)
      const orderDeleted = await deleteService(orderId)
      expect(orderDeleted.deletedAt).not.toBeNull()
    })
  })
})
