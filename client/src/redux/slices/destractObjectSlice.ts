import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  DoList: [],
  filterDoList: []
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
    updateOneDestractObject(state, action) {
      state.DoList.reduce((acc: any, item: any) => {
        if(item._id === action.payload._id){
          return [...acc, {...item}];
        }
        return [...acc, item];
      },[]);
    },
    removeOneDestractObject(state,action) {
      state.DoList.filter((item:any) => item._id !== action.payload._id);
    },
    setFilterDestractObjects(state, action) {
      state.filterDoList = [...action.payload];
    },
    removeFilterDestractObjects(state) {
      state.DoList = initialState.DoList;
      state.filterDoList = initialState.filterDoList;
    },
  },
});

export const {setDestractObjects,updateOneDestractObject, removeDestractObjects, removeOneDestractObject, setFilterDestractObjects, removeFilterDestractObjects} = destractObjectSlice.actions;
export default destractObjectSlice.reducer;