import { corsOptions } from 'config/corsOptions';
import express from 'express';
import { connect, set as mongooseSet } from 'mongoose';

export const app = express();

mongooseSet('strictQuery', false);

connect(process.env.DB_CONNECTION ?? '')
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => console.error(e));

app.use(corsOptions);
