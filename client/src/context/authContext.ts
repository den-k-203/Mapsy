import {createContext} from "react";
import { Token, User } from "../types/main";

interface AuthContext {
  login?:(jwtToken: Token, user: User) => void,
  logout?:() => void
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const AuthContext = createContext<AuthContext>({login: () => console.log(), logout: () => console.log()});