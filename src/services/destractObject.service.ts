import DestractObjectModel from "../models/destractObject.model.js";

import { DestractObject } from "../interfaces/main.js";
import { IdDO } from "../types/main.js";

class DestractObjectService {
  // create destract object
  async createDO(values: DestractObject) {
    try {
      const destractObject = new DestractObjectModel({ ...values });
      const data = await destractObject.save();
      return data
    } catch (error) {
      const { message }: any = error;
      throw new Error(`Помилка створення об'єкта руйнації. ${message}`);
    }
  }
  // get destract object list
  async getAllDO() {
    try {
      return await DestractObjectModel.find();
    } catch (error) {
      const { message }: any = error;
      throw new Error(`Помилка взяття масиву об'єктів з бази. ${message}`);
    }
  }
  // update destract object
  async updateOneDO(values: DestractObject) {
    try {
      const _id = values._id;
      const dbResponse = await DestractObjectModel.findOne({ _id });
      if (!dbResponse) {
        throw new Error(`Запису з id:${_id} не інсує`);
      }
      delete values._id;
      await DestractObjectModel.updateOne({ _id }, { ...values });
      const updataData = await DestractObjectModel.findById(_id)
      return updataData
    } catch (error) {
      const { message }: any = error;
      throw new Error(message);
    }
  }
  // delete destract object
  async deleteOneDO(_id: IdDO) {
    try {
      const dbResponse = await DestractObjectModel.findOne({ _id });
      if (!dbResponse) {
        throw new Error(`Запису з id:${_id} не інсує`);
      }
      return await DestractObjectModel.deleteOne({ _id });
    } catch (error) {
      const { message }: any = error;
      throw new Error(message);
    }
  }
}

export default new DestractObjectService();