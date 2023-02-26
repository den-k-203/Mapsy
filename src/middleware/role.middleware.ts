import jwt, {JwtPayload} from "jsonwebtoken";
import express from "express";
import {message} from "../utils/main.js";

// type Payload = {
//     id: string,
//     role: string,
//     iat: number,
//     exp: number
// }

export default function (roles: string) {
    return  function (request: express.Request, response: express.Response, next: express.NextFunction) {
        if (request.method === "OPTIONS") next();
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const token: string | undefined = request.headers.authorization.split(" ")[1];
            if(!token) {return response.status(200).json(message("Користувач не авторизований."));}
            const secret: string = process.env.JWT_ACCESS_SECRET as string;
            const payload: JwtPayload | string = jwt.verify(token, secret);
            let hasRole = false;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if(roles === payload.role) {
                hasRole = true;
            }
            if(!hasRole) {
               return response.status(403).json(message("У вас недостатньо прав."));
            }
            next();
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
            console.log(errorMessage);
            return response.status(500).json(message("Користувач не авторизований"));
        }
    };
}