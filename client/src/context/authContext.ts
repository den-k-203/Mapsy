import {createContext} from "react";
import { Token, User } from "../types/main";

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}
interface AuthContext {
  login?:(jwtToken: Token, user: User) => void,
  logout?:() => void
}
export const AuthContext = createContext<AuthContext>({});