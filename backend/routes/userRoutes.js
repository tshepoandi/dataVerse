import express from 'express';
import { registerUser, authUser, getAllUsers, getUserById, logoutUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();


router.route('/register').post(registerUser);
router.post('/login', authUser);
router.route('/').get(protect, getAllUsers);
router.route('/:id').get(protect, getUserById);
router.route("logout").post(logoutUser)
export default router