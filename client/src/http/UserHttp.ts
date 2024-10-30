import axios, { AxiosResponse } from "axios";

const api = "http://localhost:5000/api/admin/user"

class UsersHttp{
    static async getUsers(token: string): Promise<AxiosResponse<unknown | undefined>> {
        const response = await axios.get(`${api}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response;
      }
}

export default UsersHttp