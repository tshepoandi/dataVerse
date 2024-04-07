import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDatabase from '../databaseConfiguration/database.js';
import promptRoutes from '../routes/promptRoutes.js'
import userRoute from '../routes/userRoutes.js'
import analysisRoute from '../routes/analyticsRoutes.js'
dotenv.config();
connectToDatabase();


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', promptRoutes);
app.use('/api/users', userRoute)
app.use('/api/analysis', analysisRoute)
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});