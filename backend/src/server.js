import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import promptRoutes from '../routes/promptRoutes.js'
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the prompt router
app.use('/api', promptRoutes);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});