import express from 'express'
const router = express.Router()
import { createAnalytics, getAllAnalytics, getAnalyticsById } from '../controllers/analysisController.js'

router.post('/', createAnalytics);
router.route('/save-analysis').post(createAnalytics)
router.route('/analytics').get(getAllAnalytics)
router.route('/:id').get(getAnalyticsById)

export default router