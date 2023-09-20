import models from './../models/index.js'

const { Customer } = models

const createService = async (body) => {
  return await Customer.create(body)
}

const readByIdService = async (id) => {
  return await Customer.findByPk(id)
}

const readAllService = async () => {
  return await Customer.findAll()
}

const updateService = async (id, body) => {
  const customer = await Customer.findByPk(id)
  if (!customer) throw new Error('Customer not found')
  const customerUpdated = await customer.update(body)
  return customerUpdated
}

const deleteService = async (id) => {
  const customer = await Customer.findByPk(id)
  if (!customer) throw new Error('Customer not found')
  const customerDeleted = await customer.destroy()
  return customerDeleted
}

export { createService, readByIdService, readAllService, updateService, deleteService }
