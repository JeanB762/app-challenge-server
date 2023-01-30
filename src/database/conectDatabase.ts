import mongoose from 'mongoose';
import 'dotenv/config';

export const connectDatabse = () => {
  console.log('Connecting to database...');

  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to database!'))
    .catch((error) => console.log(`Error to connect to database - ${error}`));
};
