import express from 'express';
import cors from 'cors';
import patientsRouter from './routes/patients';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://tinypatient.netlify.app/'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());

const PORT = 3001;

app.use('/api/patients', patientsRouter);

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} and connected to MongoDB`);
});
  }).catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });