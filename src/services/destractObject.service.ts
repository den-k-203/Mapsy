import DestractObjectModel from "../models/destractObject.model.js";

import { DestractObject } from "../interfaces/main.js";
import { IdDO } from "../types/main.js";

class DestractObjectService {
  async createDO(values: DestractObject) {
    try {
      const destractObject = new DestractObjectModel({ ...values });
      await destractObject.save();
    } catch (error) {
      const { message }: any = error;
      throw new Error(`Помилка створення об'єкта руйнації. ${message}`);
    }
  }

  async getAllDO() {
    try {
      return await DestractObjectModel.find();
    } catch (error) {
      const { message }: any = error;
      throw new Error(`Помилка взяття масиву об'єктів з бази. ${message}`);
    }
  }

  async updateOneDO(values: DestractObject) {
    try {
      const _id = values._id;
      const dbResponse = await DestractObjectModel.findOne({ _id });
      if (!dbResponse) {
        throw new Error(`Запису з id:${_id} не інсує`);
      }
      delete values._id;
      return await DestractObjectModel.updateOne({ _id }, { ...values });
    } catch (error) {
      const { message }: any = error;
      throw new Error(message);
    }
  }

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