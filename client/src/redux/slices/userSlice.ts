import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/main";

const initialState: User = {
  _id: null,
  email: null,
  login: null,
  firstName: null,
  secondName: null,
  password: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.password = action.payload.password;
      state.role = action.payload.role;
    },
    removeUser(state) {
      state._id = null;
      state.email = null;
      state.login = null;
      state.firstName = null;
      state.secondName = null;
      state.password = null;
      state.role =null;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;