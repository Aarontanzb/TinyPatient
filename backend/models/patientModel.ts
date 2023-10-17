import mongoose from "mongoose";

const collectionName = process.env.NODE_ENV === 'test' ? 'cypress' : 'patients';

const patientSchema = new Schema({
  _id: { type: String, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  info: String
}, {timestamps: true});

const patientModel = mongoose.model("Patient", patientSchema, collectionName);

export default patientModel;
