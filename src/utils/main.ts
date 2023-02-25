import {Message} from "../types/main.js";

export function message(message: string): Message {
    return {message: message}
}