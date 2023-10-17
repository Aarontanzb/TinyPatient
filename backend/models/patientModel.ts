import mongoose from "mongoose";

// Change collection name based on test mode
const collectionName = process.env.NODE_ENV === 'test' ? 'cypress' : 'patients';

const Schema = mongoose.Schema;

// Define schema for patients
const patientSchema = new Schema({
  _id: { type: String, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  info: String
}, {timestamps: true});

const patientModel = mongoose.model("Patient", patientSchema, collectionName);

export default patientModel;
