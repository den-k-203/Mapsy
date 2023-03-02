import express from "express";
import { validationResult } from "express-validator";
import { message } from "../utils/main.js";
import DestractObjectModel from "../models/destractObject.model.js";

class AdminController {
  async createUser(request: express.Request, response: express.Response) {
    try {

    } catch (e) {

    }
  }
  async getUsers(request: express.Request, response: express.Response) {
    try {

    } catch (e) {

    }
  }
  async updateUser(request: express.Request, response: express.Response) {
    try {

    } catch (e) {

    }
  }
  async deleteUser(request: express.Request, response: express.Response) {
    try {

    } catch (e) {

    }
  }

  async createDestractObject(request: express.Request, response: express.Response) {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({message: "Помилка при вході", errors: errors.array()});
      }
      const {
        title, position, postName, address, type, area, imgPath, text, percentageOfDestruction, dateOfDestruction
      } = request.body;

      const destractObject = new DestractObjectModel(
        {title, position, postName, address, type, area, imgPath, text, percentageOfDestruction, dateOfDestruction}
      );
      await destractObject.save();

      return response.status(200).json(message("Об'єкт сворено"));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(errorMessage);

      return response.status(500).json(message("Помилка створення об'єкту."));
    }
  }
  async getDestractObjects(request: express.Request, response: express.Response) {
    try {
      const destractObjects = await DestractObjectModel.find();
      response.status(200).json(destractObjects);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(errorMessage);

      return response.status(500).json(message("Помилка створення об'єкту."));
    }
  }
  async updateDestractObject(request: express.Request, response: express.Response) {
    try {

    } catch (e) {

    }
  }
  async deleteDestractObject(request: express.Request, response: express.Response) {
    try {

    } catch (e) {

    }
  }
}
export default new AdminController();