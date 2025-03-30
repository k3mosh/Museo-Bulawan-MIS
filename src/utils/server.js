import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { sequelize } from './database.js';
import authRoutes from './route/authRoutes.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); 
    console.log('Database connected and models synchronized');
    app.listen(5000, () => console.log('Server running on port 5000'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
