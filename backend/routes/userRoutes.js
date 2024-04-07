import express from 'express';
import { registerUser, authUser, getAllUsers, getUserById } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();


router.route('/register').post(registerUser);
router.post('/login', authUser);
router.route('/').get(protect, getAllUsers);
router.route('/:id').get(protect, getUserById);

export default router