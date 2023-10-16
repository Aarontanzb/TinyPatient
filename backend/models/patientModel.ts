import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  info: String
}, {timestamps: true});

const patientModel = mongoose.model("Patient", patientSchema);

export default patientModel;
