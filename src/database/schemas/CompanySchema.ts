import { Document, model, Schema } from 'mongoose';

interface ICompanySchema extends Document {
  id?: string;
  name: string;
}

const CompanySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<ICompanySchema>('Company', CompanySchema);
