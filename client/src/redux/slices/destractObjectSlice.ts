import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  DoList: []
};

const destractObjectSlice = createSlice({
  name: "destractObjects",
  initialState,
  reducers: {
    setDestractObjects(state, action) {
      state.DoList = [...action.payload];
    },
    removeDestractObjects(state) {
      state.DoList = initialState.DoList;
    },
  },
});

export const {setDestractObjects, removeDestractObjects} = destractObjectSlice.actions;
export default destractObjectSlice.reducer;