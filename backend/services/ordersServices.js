import models from './../models/index.js'

const { Order } = models

const createService = async (body) => {
  return await Order.create(body)
}

const readByIdService = async (id) => {
  return await Order.findByPk(id)
}

const readAllService = async () => {
  return await Order.findAll({ 
    include: [
      {
        association: 'product',
        attributes: ['id', 'name', 'description'],
        required: false,
      },
      {
        association: 'customer',
        attributes: ['id', 'identification', 'name'],
        required: false,
      },
    ]
  })
}

const updateService = async (id, body) => {
  const order = await Order.findByPk(id)
  if (!order) throw new Error('Order not found')
  const customerUpdated = await order.update(body)
  return customerUpdated
}

const deleteService = async (id) => {
  const order = await Order.findByPk(id)
  if (!order) throw new Error('Order not found')
  const customerDeleted = await order.destroy()
  return customerDeleted
}

export { createService, readByIdService, readAllService, updateService, deleteService }
