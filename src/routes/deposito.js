import { Router } from 'express'
const router = Router()

import {componenteAgregar, componenteBuscar, componenteBuscarID, componenteActualizar, componenteEliminar} from '../controllers/controladores.js'
import { auth } from '../middleware/representacion.js'

router.get('/', auth , componenteBuscar)
router.get('/:id', auth , componenteBuscarID)
router.post('/', auth , componenteAgregar)
router.put('/:id', auth , componenteActualizar)
router.delete('/:id', auth , componenteEliminar)

export default router