import { Router} from 'express'
import { getAllBooks, getBook, updateBook, deleteBook, createBook } from '../controller/bookController.js'
import checkAuth from '../middleware/authMiddleware.js'

const router = Router()

router.get('/', getAllBooks)
router.get('/:id', getBook)
router.post('/create',checkAuth, createBook)
router.put('/edit/:id',checkAuth, updateBook)
router.delete('/delete/:id',checkAuth, deleteBook)

export default router