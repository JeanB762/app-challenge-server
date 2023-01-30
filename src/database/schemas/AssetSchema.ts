import { Document, model, Schema } from 'mongoose';

interface IAssetSchema extends Document {
  id?: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  status: string;
  healthlevel: string;
  image: string;
  companyId: string;
  unitId: string;
  responsibles: string[];
}

const AssetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    healthlevel: {
      type: String,
      required: true,
    },
    image: {
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
    responsibles: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IAssetSchema>('Asset', AssetSchema);
