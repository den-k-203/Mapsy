import { model, Schema } from "mongoose";

const DestractObject: Schema = new Schema({
  title: { type: String, require: true },
  position: { type: [], require: true },
  postName: { type: String, require: true },
  address: { type: String, require: true },
  type: { type: String, require: true },
  area: { type: Number, require: true },
  imgPath: { type: String, require: true },
  text: { type: String, require: true },
  percentageOfDestruction: { type: String, require: true },
  dateOfDestruction: { type: String, require: true },
  dateOfRecovery: { type: String, require: true },
  location: {type: String},
});

export default model("DestractObject", DestractObject);