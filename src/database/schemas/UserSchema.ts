import { Document, model, Schema } from 'mongoose';

interface IUserSchema extends Document {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  companyId: string;
  unitId: string;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    companyId: {
      type: String,
      required: true,
    },
    unitId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUserSchema>('User', UserSchema);
