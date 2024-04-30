import models from './../models/index.js'
import {
  createService,
  readByIdService,
  readAllService,
  updateService,
  deleteService,
} from './productsServices.js'

const { sequelize, Product } = models

const productBody = {
  name: 'Naranjas',
  description: 'Cosecha #2',
  quantity: 3
}

afterEach(() => {
  try {
    return Promise.all(
      [Product].map((model) =>
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

describe('Product services', () => {
  describe('createService', () => {
    test('should create a product', async () => {
      const product = await createService(productBody)
      expect(product).toBeInstanceOf(Product)
    })
  })

  describe('readByIdService', () => {
    test('should search a product by id', async () => {
      const { id: productId } = await Product.create(productBody)
      expect(await readByIdService(productId)).toBeInstanceOf(Product)
    })
  })

  describe('readAllService', () => {
    test('should return all products', async () => {
      await Product.create(productBody)
      await Product.create(productBody)
      expect(await readAllService()).toHaveLength(2)
    })
  })

  describe('updateService', () => {
    test('should update a product', async () => {
      const { id: productId } = await Product.create(productBody)
      const productBodyModified = Object.assign(productBody)
      productBodyModified.name = 'Carolina Suarez'
      const productUpdated = await updateService(productId, productBodyModified)
      expect(await Product.findByPk(productId)).toStrictEqual(productUpdated)
    })
  })

  describe('deleteService', () => {
    test('should delete a product', async () => {
      const { id: productId } = await Product.create(productBody)
      const productDeleted = await deleteService(productId)
      expect(productDeleted.deletedAt).not.toBeNull()
    })
  })
})
