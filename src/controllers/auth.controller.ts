import express from "express";
import bcrypt from "bcrypt";

import UserModel from "../models/user.model.js";
import RoleModel from "../models/role.model.js";

import {User} from "../types/main.js";

import {message} from "../utils/main.js";




class AuthController {
    async registration(request: express.Request, response: express.Response) {
        try {
            const {email, login, firstName, secondName, password, role}: User = request.body;

            const candidateEmail: User | null = await UserModel.findOne({email: email});
            const candidateLogin: User | null = await UserModel.findOne({login: login});

            if(!candidateEmail || !candidateLogin) {
                return response.status(400).json(message("Користувач з таким логіном або паролем вже створений."));
            }

            const hashPassword = await bcrypt.hash(password, 6);
            const {value} = new RoleModel({value: role});

            const user = new UserModel({email, login, firstName, secondName, password: hashPassword, role: value});
            await user.save();

            return response.status(200).json(message("Користувач створений!"));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
            console.log(errorMessage);

            return response.status(500).json(message(errorMessage));
        }
    }

    async login(request: express.Request, responce: express.Response) {
        try {

        } catch (error) {

        }
    }

    async getUsers(request: express.Request, responce: express.Response) {
        try {

        } catch (error) {

        }
    }
}
export default new AuthController();