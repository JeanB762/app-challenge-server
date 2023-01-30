import { Document, model, Schema } from 'mongoose';

interface IUnitSchema extends Document {
  id?: string;
  name: string;
  companyId: string;
}

const UnitSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    companyId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUnitSchema>('Unit', UnitSchema);
