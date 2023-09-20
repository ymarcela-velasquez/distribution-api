import {
  createService,
  readAllService,
  readByIdService,
  updateService,
  deleteService,
} from '../services/productsServices.js'

const createController = async (req, res) => {
  const product = await createService(req.body)
  res.json(product)
}

const readAllController = async (req, res) => {
  const customers = await readAllService()
  res.json(customers)
}

const readByIdController = async (req, res) => {
  const productId = req.params.id
  const product = await readByIdService(productId)
  res.json(product)
}

const updateController = async (req, res) => {
  const product = await updateService(req.params.id, req.body)
  res.json(product)
}

const deleteController = async (req, res) => {
  const product = await deleteService(req.params.id, req.body)
  res.json(product)
}

export { createController, readAllController, readByIdController, updateController, deleteController }
