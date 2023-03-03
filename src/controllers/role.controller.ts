import express from "express";

import {message} from "../utils/main.js";
import { Role } from "../types/main.js";
import RoleService from "../services/role.service.js";

class RoleController {
  // CREATE ROLE
  async createRole(request: express.Request, response: express.Response) {
    try {
      const {value}: Role = request.body;
      const role = await RoleService.createRole({ value });
      return response.status(200).json(message(`Роль ${role.value} створена`));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(errorMessage);
      return response.status(500).json(message(errorMessage));
    }
  }
  // GET ROLE LIST
  async getRoles(request: express.Request, response: express.Response) {
    try {
      const roles = await RoleService.getRoles();
      return  response.status(200).json(roles);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(errorMessage);
      return response.status(500).json(message(errorMessage));
    }
  }
}
export default new RoleController();