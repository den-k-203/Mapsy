import jwt from "jsonwebtoken";
import {AccessToken} from "../types/main.js";

class TokenService {
    generateAccessToken(id: string | undefined, role: string): AccessToken {
        const payload = {id, role};
        const secret: string = process.env.JWT_ACCESS_SECRET as string;
        const accessToken = jwt.sign(payload, secret, {expiresIn: "1h"});
        return {accessToken};
    }
}
export default new TokenService();