import axios, { AxiosResponse } from "axios";
import DestructionObject from "../types/ObjectDestroy";

const api = "http://localhost:5000/api/admin"

class DOHttp{
    static async createDO(token: string, data: any): Promise<AxiosResponse<DestructionObject | undefined>>{
       return await axios.post(
            `${api}/destract-object`,
            data,
            {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            }
        );
    }

    static async removeDO(_id: string, token: string): Promise<AxiosResponse<unknown | undefined>>{
        return await axios.delete(`${api}/destract-object/${_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            },
        })
    }

    static async editDO(data: DestructionObject, token: string): Promise<AxiosResponse<DestructionObject | undefined>>{
        return await axios.patch(`${api}/destract-object`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },  
        })
    }

    static async getDOAll():  Promise<AxiosResponse<DestructionObject[] | undefined>>{
        return await axios.get(
            `${api}/destract-object`
        );
    }
}

export default DOHttp