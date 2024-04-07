import mongoose from "mongoose";

const analysisSchema = mongoose.Schema({
    analysisName: { type: String, required: true },
    analysisDescription: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Analysis = mongoose.model('Analysis', analysisSchema);
export default Analysis