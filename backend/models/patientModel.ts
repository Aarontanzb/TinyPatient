import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  id: { type: String, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  info: String
}, {timestamps: true});

const patientModel = mongoose.model("Patient", patientSchema);

export default patientModel;
