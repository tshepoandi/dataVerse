import express from 'express';
import { sendPromptController } from '../controllers/promptController.js';
const router = express.Router();

router.post('/send-prompt', sendPromptController);

export default router;