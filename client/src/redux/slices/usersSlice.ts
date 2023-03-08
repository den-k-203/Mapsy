import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  users: [],
  filtersUsers: []
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
    removeOneUser(state,action) {
      state.users.filter((item:any) => item._id !== action.payload._id);
    },
    setFilterUsers(state, action) {
      state.filtersUsers = [...action.payload];
    },
    removeFilterUsers(state) {
      state.users = initialState.users;
      state.filtersUsers = initialState.filtersUsers;
    },
  },
});

export const {setUsers, removeUsers, updateOneUser, removeOneUser, setFilterUsers, removeFilterUsers} = usersSlice.actions;
export default usersSlice.reducer;