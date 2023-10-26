import {
  createService,
  readAllService,
  readByIdService,
  updateService,
  deleteService,
} from '../services/customersServices.js'

const createController = async (req, res) => {
  const customer = await createService(req.body)
  res.json(customer)
}

const readAllController = async (req, res) => {
  const customers = await readAllService()
  res.json(customers)
}

const readByIdController = async (req, res) => {
  const customerId = req.params.id
  const customer = await readByIdService(customerId)
  res.json(customer)
}

const updateController = async (req, res) => {
  const customer = await updateService(req.params.id, req.body)
  res.json(customer)
}

const deleteController = async (req, res) => {
  const customer = await deleteService(req.params.id, req.body)
  res.json(customer)
}

export { createController, readAllController, readByIdController, updateController, deleteController }
