import express from "express";
import { validationResult } from "express-validator";

import DestractObjectService from "../services/destractObject.service.js";

import { message } from "../utils/main.js";

import { DestractObject } from "../interfaces/main.js";
import { IdDO } from "../types/main.js";

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
  // CREATE ONE
  // ALL PATH api/admin/destract-object
  async createDestractObject(request: express.Request, response: express.Response) {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ message: "Помилка введених даних", errors: errors.array() });
      }
      const values: DestractObject = request.body;
      await DestractObjectService.createDO(values);
      return response.status(200).json(message("Об'єкт сворено"));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка створення об'єкту:${errorMessage}.`);
      return response.status(500).json(message("Помилка створення об'єкту."));
    }
  }
  // GET ALL
  async getDestractObjects(request: express.Request, response: express.Response) {
    try {
      const destractObjects = await DestractObjectService.getAllDO();
      response.status(200).json(destractObjects);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка отриманння масиву об'єктів. ${errorMessage}.`);
      return response.status(500).json(message(`Помилка отриманння масиву об'єктів. ${errorMessage}.`));
    }
  }
  // UPDATE ONE
  async updateDestractObject(request: express.Request, response: express.Response) {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ message: "Помилка введених даних", errors: errors.array() });
      }
      const values: DestractObject = request.body;
      await DestractObjectService.updateOneDO(values);
      return response.status(200).json(message("Дані об'єкта руйнації оновлено."));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка оновлення об'єкту. ${errorMessage}.`);
      return response.status(500).json(message(`Помилка оновлення об'єкту. ${errorMessage}.`));
    }
  }
  // DELETE ONE
  async deleteDestractObject(request: express.Request, response: express.Response) {
    try {
      const { _id }: IdDO = request.body;
      await DestractObjectService.deleteOneDO({ _id });
      return response.status(200).json(message(`Об'єкта руйнації з id:${_id} видалено.`));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка видалення об'єкту:${errorMessage}.`);
      return response.status(500).json(message("Помилка видалення об'єкту."));
    }
  }
}

export default new AdminController();