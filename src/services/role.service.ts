import { Role } from "../types/main.js";
import RoleModel from "../models/role.model.js";

class RoleService {
  async createRole({ value }: Role) {
    try {
      const role = await RoleModel.create({value});
      return role;
    } catch (error) {
      throw new Error(`Помилка створення ролі. ${error}`);
    }
  }
  async getRoles() {
    try {
      const roles = await RoleModel.find();
      return roles;
    } catch (error) {
      throw new Error(`Помилка при повернені ліста ролей. ${error}`);
    }
  }
}
export default new RoleService();