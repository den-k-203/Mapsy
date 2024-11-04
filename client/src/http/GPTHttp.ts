import axios, { AxiosResponse } from "axios";
import DestructionObject from "../types/ObjectDestroy";

const api = "http://127.0.0.1:8000/api/v1"

interface GPTAnswer{
    gpt_answer: string
}

class GPTHttp{
    static async getAnswer(objects: DestructionObject[]): Promise<AxiosResponse<GPTAnswer | undefined>> {
        return await axios.post(`${api}/gpt-answer`, { objects }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default GPTHttp