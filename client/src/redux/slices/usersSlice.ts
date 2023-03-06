import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  users: []
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = [...action.payload];
    },
    removeUsers(state) {
      state.users = initialState.DoList;
    },
    updateOneUser(state, action) {
      state.users.reduce((acc: any, item: any) => {
        if(item._id === action.payload._id){
          return [...acc, {...item}];
        }
        return [...acc, item];
      },[]);
    },
    removeOneDuser(state,action) {
      state.users.filter((item:any) => item._id !== action.payload._id);
    },
  },
});

export const {setUsers, removeUsers, updateOneUser, removeOneDuser} = usersSlice.actions;
export default usersSlice.reducer;