import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const destractObjectSlice = createSlice({
  name: "destractObjects",
  initialState,
  reducers: {
    setDestractObjects(state, action) {
      state.push(...action.payload);
      console.log(state);
    },
    removeDestractObjects(state) {
      state = initialState;
    },
  },
});

export const {setDestractObjects, removeDestractObjects} = destractObjectSlice.actions;
export default destractObjectSlice.reducer;