import models from './../models/index.js'
import {
  createService,
  readByIdService,
  readAllService,
  updateService,
  deleteService,
} from './customersServices.js'

const { sequelize, Customer } = models

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
      [Customer].map((model) =>
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

describe('Customer services', () => {
  describe('createService', () => {
    test('should create a customer', async () => {
      const customer = await createService(customerBody)
      expect(customer).toBeInstanceOf(Customer)
    })
  })

  describe('readByIdService', () => {
    test('should search a customer by id', async () => {
      const { id: customerId } = await Customer.create(customerBody)
      expect(await readByIdService(customerId)).toBeInstanceOf(Customer)
    })
  })

  describe('readAllService', () => {
    test('should return all customers', async () => {
      await Customer.create(customerBody)
      await Customer.create(customerBody)
      expect(await readAllService()).toHaveLength(2)
    })
  })

  describe('updateService', () => {
    test('should update a customer', async () => {
      const { id: customerId } = await Customer.create(customerBody)
      const customerBodyModified = Object.assign(customerBody)
      customerBodyModified.name = 'Carolina Suarez'
      const customerUpdated = await updateService(customerId, customerBodyModified)
      expect(await Customer.findByPk(customerId)).toStrictEqual(customerUpdated)
    })
  })

  describe('deleteService', () => {
    test('should delete a customer', async () => {
      const { id: customerId } = await Customer.create(customerBody)
      const customerDeleted = await deleteService(customerId)
      expect(customerDeleted.deletedAt).not.toBeNull()
    })
  })
})
