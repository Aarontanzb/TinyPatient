import express from 'express';
import cors from 'cors';
import patientsRouter from './routes/patients';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import testingRouter from './routes/testing';
import healthRouter from './routes/health';

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://tinypatient.netlify.app', 'https://tinypatient.onrender.com'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());

const PORT = 3001;

app.use('/api/patients', patientsRouter);
app.use('/api/health', healthRouter);

if (process.env.NODE_ENV === 'test') {
  app.use('/api/testing', testingRouter);
}

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} and connected to MongoDB`);
});
  }).catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

