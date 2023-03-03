import { User, UserDTO } from "../types/main.js";

class UserDtoService {
  toUserDto(user: User) {
    const userDto: UserDTO = {
      _id: user._id,
      email: user.email,
      login: user.login,
      firstName: user.firstName,
      secondName: user.secondName,
      role: user.role
    };
    return userDto;
  }
}
export default new UserDtoService();