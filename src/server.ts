import express from 'express';
import { createAsset } from './routes';
import 'dotenv/config';

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());

app.post('/create-asset', createAsset);

app.listen(port, () => {
  console.log('server is running...');
});
