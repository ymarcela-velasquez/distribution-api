import { Router } from 'express'

import {
  createController,
  readAllController,
  readByIdController,
  updateController,
  deleteController,
} from './productsControllers.js'

const router = Router()

router.post('/', createController)
router.get('/', readAllController)
router.get('/:id', readByIdController)
router.patch('/:id', updateController)
router.delete('/:id', deleteController)

export default router
