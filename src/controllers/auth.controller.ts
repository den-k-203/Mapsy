import express from "express";
import bcrypt from "bcrypt";

import UserModel from "../models/user.model.js";
import RoleModel from "../models/role.model.js";

import TokenService from "../services/token.service.js";
import {LoginData, User} from "../types/main.js";
import {message} from "../utils/main.js";
import UserService from "../services/user.service.js";

class AuthController {
    async registration(request: express.Request, response: express.Response) {
        try {
            const user: User = request.body;
            await UserService.registrationOneUser(user);
            return response.status(200).json(message("Користувач створений!"));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
            console.log(errorMessage);
            return response.status(500).json(message(errorMessage));
        }
    }

    async login(request: express.Request, response: express.Response) {
        try {
            const loginData: LoginData = request.body;
            const data = await UserService.loginOneUser(loginData);
            return response.status(200).json({user: data.user, token: data.token});
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
            console.log(errorMessage);

            return response.status(500).json(message(errorMessage));
        }
    }

    async getUsers(request: express.Request, response: express.Response) {
        try {
            const users: User[] = await UserModel.find();

            return response.json(users);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
            console.log(errorMessage);

            return response.status(500).json(message(errorMessage));
        }
    }
}
export default new AuthController();