import mongoose from "mongoose";

const Schema = mongoose.Schema;

const testSchema = new Schema({
  _id: { type: String, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  info: String
}, {timestamps: true});

const testModel = mongoose.model("Patient", testSchema);

export default testModel;
