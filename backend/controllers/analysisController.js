import Analysis from "../models/analysisModel";
import asyncHandler from "../middleware/asyncHandler"

export const getAllAnalytics = asyncHandler(async(req, res) => {
    const analysis = await Analysis.find({ userId: req.user._id });
    res.status(200).json(analysis);
})

export const getAnalyticsById = asyncHandler(async(req, res) => {
    const analytics = await Analytics.find({ _id: req.params.id, userId: req.user._id });
    if (!analytics) {
        res.status(404);
        throw new Error("Analytics not found");
    }
    res.status(200).json(analytics);
})

export const createAnalytics = asyncHandler(async(req, res) => {
    const { analyticsName, analyticsDescription, analyticsData } = req.body;

    try {
        const analytics = await Analytics.create({
            analyticsName,
            analyticsDescription,
            analyticsData
        })
        res.status(201).json(analytics)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})