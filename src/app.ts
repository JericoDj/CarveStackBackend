import express from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import { errorMiddleware } from './middleware/error.middleware';
import routes from './routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Authentication Middleware
app.use(clerkMiddleware());

// Routes
app.use('/api', routes);

// Global Error Handler
app.use(errorMiddleware);

export default app;
