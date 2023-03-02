import { createSlice } from "@reduxjs/toolkit";
import { Token } from "../../types/main";

const initialState: Token = {
      accessToken: null
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    removeToken(state) {
      state.accessToken = null;
    },
  },
});

export const {setToken, removeToken} = tokenSlice.actions;
export default tokenSlice.reducer;