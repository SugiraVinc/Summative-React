import { Router} from 'express'
import { authUser, registerUser, updateUser, logoutUser } from '../controller/userController.js'
import checkAuth from '../middleware/authMiddleware.js'

const router = Router()

router.post('/login', authUser)
router.post('/register', registerUser)
router.put('/edit',checkAuth,updateUser)
router.post('/delete', logoutUser)

export default router