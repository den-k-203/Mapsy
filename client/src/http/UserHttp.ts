import axios, { AxiosResponse } from "axios";

const api = "http://localhost:5000/api/admin/user"

class UsersHttp{
    static async getUsers(token: string): Promise<AxiosResponse<unknown | undefined>> {
        return await axios.get(`${api}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });;
      }
}

export default UsersHttp