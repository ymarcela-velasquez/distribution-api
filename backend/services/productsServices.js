import models from './../models/index.js'

const { Product } = models

const createService = async (body) => {
  return await Product.create(body)
}

const readByIdService = async (id) => {
  return await Product.findByPk(id)
}

const readAllService = async () => {
  return await Product.findAll()
}

const updateService = async (id, body) => {
  const product = await Product.findByPk(id)
  if (!product) throw new Error('Product not found')
  const customerUpdated = await product.update(body)
  return customerUpdated
}

const deleteService = async (id) => {
  const product = await Product.findByPk(id)
  if (!product) throw new Error('Product not found')
  const customerDeleted = await product.destroy()
  return customerDeleted
}

export { createService, readByIdService, readAllService, updateService, deleteService }
