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
    addOneDestractObject(state, action) {
      state.DoList.push(action.payload);
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
    filterDestractObjects(state, action) {
      const { dateRange, objectType, damageState, destroyedBy, victimCount, district } = action.payload;
      
      state.filterDoList = state.DoList.filter((item: any) => {
        const matchesDate =
          (!dateRange.start || new Date(item.date) >= new Date(dateRange.start)) &&
          (!dateRange.end || new Date(item.date) <= new Date(dateRange.end));
        
        const matchesObjectType = !objectType || item.objectType === objectType;
        const matchesDamageState = !damageState || item.damageState === damageState;
        const matchesDestroyedBy = !destroyedBy || item.destroyedBy === destroyedBy;
        const matchesVictimCount =
          (victimCount.min <= item.victimCount && item.victimCount <= victimCount.max);
        const matchesDistrict = !district || item.district === district;

        return matchesDate && matchesObjectType && matchesDamageState && matchesDestroyedBy && matchesVictimCount && matchesDistrict;
      });
    },
  },
});

export const {addOneDestractObject, filterDestractObjects, setDestractObjects,updateOneDestractObject, removeDestractObjects, removeOneDestractObject, setFilterDestractObjects, removeFilterDestractObjects} = destractObjectSlice.actions;
export default destractObjectSlice.reducer;