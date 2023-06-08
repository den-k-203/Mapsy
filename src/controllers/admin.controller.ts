import express from "express";
import { Result, ValidationError, validationResult } from "express-validator";

import DestractObjectService from "../services/destractObject.service.js";

import { message } from "../utils/main.js";

import { DestractObject } from "../interfaces/main.js";
import { IdDO, User, UserDTO, UserId } from "../types/main.js";
import UserService from "../services/user.service.js";
import * as fs from "fs";
import path from "path";
import { Error } from "mongoose";

class AdminController {
  // USERS
  // ALL PATH  api/admin/user
  // GET ALL
  async getUsers(request: express.Request, response: express.Response) {
    try {
      const users: User[] = await UserService.getAllUser();
      return response.status(200).json(users);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка отримання списску користувачів. ${errorMessage}.`);
      return response.status(500).json(message("Помилка отримання списску користувачів."));
    }
  }

  // UPDATE ONE
  async updateUser(request: express.Request, response: express.Response) {
    try {
      const values: UserDTO = request.body;
      await UserService.updateOneUser(values);
      return response.status(200).json(message("Дані користувача оновлено"));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка оновлення даних користувача. ${errorMessage}.`);
      return response.status(500).json(message("Помилка оновлення даних користувача."));
    }
  }

  async uploadFile(request: express.Request, response: express.Response) {
    try {
      if (request.file) {
        const filePath = path.join(__dirname, request.file.filename);
        fs.readFile(request.file.path, (err, data) => {
          if (err) {
            console.log(err);
            response.status(500).send("Error reading file");
          } else {
            fs.writeFile(filePath, data, (err) => {
              if (err) {
                console.log(err);
                response.status(500).send("Error writing file");
              } else {
                response.send(`File saved at ${filePath}`);
              }
            });
          }
        });
      } else {
        response.status(400).send("File not uploaded");
      }
    } catch (error) {
      const errorMessage: string = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка оновлення даних користувача. ${errorMessage}.`);
      return response.status(500).json(message("Помилка оновлення даних."));
    }
  }

  // DELETE ONE
  async deleteUser(request: express.Request, response: express.Response) {
    try {
      const { _id }: UserId = request.body;
      await UserService.deleteOneUser({ _id });
      return response.status(200).json(message(`Користувач з id:${_id} видалено.`));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка видалення користувача. ${errorMessage}.`);
      return response.status(500).json(message("Помилка видалення користувача."));
    }
  }

  // ALL PATH api/admin/destract-object
  // CREATE ONE
  async createDestractObject(request: express.Request, response: express.Response) {
    try {
      const errors: Result<ValidationError> = validationResult(request);
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