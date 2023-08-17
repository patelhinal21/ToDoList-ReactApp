import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes/index.js'
import models from './models/index.js';
import cors from 'cors';
const app =express();

// Connecting with mongoose tododb DB created in MongoDB
mongoose.connect('mongodb://localhost:27017/tododb');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());

// Initializing
routes(app);

export default app;