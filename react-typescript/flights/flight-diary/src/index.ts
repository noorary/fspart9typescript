import express from 'express';
import { Request } from "express";
const app = express();
import cors = require('cors');
import diaryRouter from './routes/diaries';

app.use(cors<Request>());
app.use(express.json());

const PORT = 3001;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});