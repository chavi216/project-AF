import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import flightRoutes from './routes/flightRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/flight-data', flightRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));