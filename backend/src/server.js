import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './service/mongodb.js'
import promptRoutes from '../routes/promptRoutes.js'
dotenv.config();



const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', promptRoutes);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});