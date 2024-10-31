import { model, Schema } from "mongoose";

const DestractObject: Schema = new Schema({
  title: { type: String, require: true },
  position: { type: [], require: true },
  postName: { type: String, require: true },
  address: { type: String, require: true },
  typeInfrastructure: { type: String, require: true },
  area: { type: Number, require: true },
  imgPath: { type: String, require: true },
  description: { type: String, require: true },
  percentageOfDestruction: { type: String, require: true },
  dateOfDestruction: { type: String, require: true },
  dateOfRecovery: { type: String, require: true },
  typeDestruction: {type: String, require: true},
  countVictims: {type: Number, require: true},
  whatDestroyed: {type: String, require: true},
  areaName: {type: String, require: true},
  neighborhood: {type: String, require: true},
  stateDestruction: {type: String, require: true}
});

export default model("DestractObject", DestractObject);