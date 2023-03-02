import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import tokenSlice from "./slices/tokenSlice";
import destractObjectSlice from "./slices/destractObjectSlice";


const store = configureStore({
  reducer: {
    user: userSlice,
    token: tokenSlice,
    destractObject: destractObjectSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch