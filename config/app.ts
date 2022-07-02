import { corsOptions } from 'config/corsOptions';
import express from 'express';
import { connect } from 'mongoose';

export const app = express();

connect(process.env.DB_CONNECTION ?? '').then(() => console.log('connected'));

app.use(corsOptions);
