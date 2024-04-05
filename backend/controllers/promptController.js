import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API);

export async function sendPromptController(req, res) {
    try {


        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = req.body.prompt;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
        res.status(200).json({ generatedText: text });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}