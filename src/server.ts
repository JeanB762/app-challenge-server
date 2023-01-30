import express, { NextFunction, Request, Response } from 'express';
import { resolve } from 'path';

import cors from 'cors';

import 'express-async-errors';
import 'dotenv/config';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import { router } from './routes';
import { ErrorsHandler } from './errors/ErrorsHandler';
import { connectDatabse } from './database/conectDatabase';

const app = express();
const port = process.env.PORT || 3333;

connectDatabse();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/avatar', express.static(resolve(__dirname, '../uploads/avatar')));
app.use(
  '/assetsPictures',
  express.static(resolve(__dirname, '../uploads/assetsPictures'))
);

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ErrorsHandler)
      return response.status(error.statusCode).json({ message: error.message });

    return response.status(500).json({
      status: 'error',
      message: `Internal server error  - ${error.message}`,
    });
  }
);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
