import { LoginData, User, UserDTO } from "../types/main.js";
import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import RoleModel from "../models/role.model.js";
import { ProcessEnv } from "../interfaces/main.js";
import { message } from "../utils/main.js";
import TokenService from "./token.service.js";
import UserDtoService from "./userDto.service.js";

class UserService {
  async registrationOneUser(values: User) {
    try {
      const { login, email, role, password, secondName, firstName } = values;
      const candidateEmail: User | null = await UserModel.findOne({ email });
      const candidateLogin: User | null = await UserModel.findOne({ login });
      if (candidateEmail || candidateLogin) throw new Error("Користувач з таким логіном або паролем вже створений.");
      const { SALT }: ProcessEnv = process.env;
      let hashPassword: string;
      if (SALT !== undefined) {
        hashPassword = await bcrypt.hash(password, Number.parseInt(SALT));
      } else {
        throw new Error("SALT не вказана.");
      }
      const { value } = new RoleModel({ value: role });
      const user = new UserModel({ email, login, firstName, secondName, password: hashPassword, role: value });
      await user.save();
    } catch (error) {
      throw new Error(`Помилка створення користувача. ${error}`);
    }
  }
  async loginOneUser(values: LoginData) {
    try {
      const {logIdent, password} = values;
      const user: User | null = await UserModel.findOne(logIdent.includes("@")? {email: logIdent} : {login: logIdent});
      if(!user) throw new Error(`Такого користувача ${logIdent} не існує.`);
      const validationPass: boolean = await bcrypt.compare(password, user.password);
      if(!validationPass) throw new Error("Введений невірний пароль");
      const token = TokenService.generateAccessToken(user._id, user.role);
      const userDto = UserDtoService.toUserDto(user);
      return { token, user: userDto };
    } catch (error) {
      throw new Error(`Помилка створення користувача. ${error}`);
    }
  }

  async updateOneUser() {
    try {

    } catch (error) {
      throw new Error(`Помилка створення користувача. ${error}`);
    }
  }

  async getAllUser() {
    try {
      const users: User[] = await UserModel.find();
      return users;
    } catch (error) {
      throw new Error(`Помилка створення користувача. ${error}`);
    }
  }

  async deleteOneUser() {
    try {

    } catch (error) {
      throw new Error(`Помилка створення користувача. ${error}`);
    }
  }
}

export default new UserService();