import {
  createService,
  readAllService,
  readByIdService,
  updateService,
  deleteService,
} from '../services/ordersServices.js'

const createController = async (req, res) => {
  const order = await createService(req.body)
  res.json(order)
}

const readAllController = async (req, res) => {
  const customers = await readAllService()
  res.json(customers)
}

const readByIdController = async (req, res) => {
  const orderId = req.params.id
  const order = await readByIdService(orderId)
  res.json(order)
}

const updateController = async (req, res) => {
  const order = await updateService(req.params.id, req.body)
  res.json(order)
}

const deleteController = async (req, res) => {
  const order = await deleteService(req.params.id, req.body)
  res.json(order)
}

export { createController, readAllController, readByIdController, updateController, deleteController }
