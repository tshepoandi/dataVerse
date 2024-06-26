import Analysis from "../models/analysisModel.js";
import asyncHandler from "../middleware/asyncHandler.js"

// export const getAllAnalytics = asyncHandler(async(req, res) => {
//     const analysis = await Analysis.find({ userId: req.params.id });
//     res.status(200).json({message:analysis});
// })

export const getAllAnalytics = asyncHandler(async(req, res) => {
    const analysis = await Analysis.find({ userId: req.params.id });
    res.status(200).json({ message: analysis });
})
export const getAnalyticsById = asyncHandler(async(req, res) => {
    console.log(req.params.id)
    const analytics = await Analysis.find({ Analysis: req.params.id });
    if (!analytics) {
        res.status(404);
        throw new Error("Analytics not found");
    }
    res.status(200).json(analytics);
})

export const createAnalytics = asyncHandler(async(req, res) => {
    const { userId, analysisName, analysisDescription, analysisData } = req.body;

    try {
        const analysis = await Analysis.create({
            analysisName,
            analysisDescription,
            analysisData,
            userId
        })
        res.status(201).json(analysis)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})