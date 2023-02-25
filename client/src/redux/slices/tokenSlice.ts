import { createSlice } from "@reduxjs/toolkit";
import { Token } from "../../types/main";

const initialState: Token = {
      accessToken: null
};

const dndSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    removeToken(state) {
      state = initialState;
    },
  },
});

export const {setToken, removeToken} = dndSlice.actions;
export default dndSlice.reducer;