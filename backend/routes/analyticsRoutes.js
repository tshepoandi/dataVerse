import express from 'express'
const router = express.Router()
import { createAnalytics, getAllAnalytics, getAnalyticsById } from '../controllers/analysisController.js'

router.post('/', createAnalytics);
router.route('/data').get(getAllAnalytics)
router.route('/save-analysis').post(createAnalytics)
router.route('/user/:id').get(getAllAnalytics)
router.route('/:id').get(getAnalyticsById)

export default router