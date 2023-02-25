import jwt, {JwtPayload} from "jsonwebtoken";
import express from "express";
import {message} from "../utils/main.js";

export default function (request: express.Request, response: express.Response, next: express.NextFunction) {
    if (request.method === "OPTIONS") next();
    try {
        let token: string | undefined;
        if(request.headers.authorization) {token = request.headers.authorization.split(" ")[1];}
        if(!token) {return response.status(200).json(message("Користувач не авторизований."));}
        const secret: string = process.env.JWT_ACCESS_SECRET as string;
        const decodedToken: string | JwtPayload = jwt.verify(token, secret);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        request.user = decodedToken;
        next();
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
        console.log(errorMessage);

        return response.status(500).json(message("Користувач не авторизований."));
    }
}