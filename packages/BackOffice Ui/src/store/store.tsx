import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import controllersSlice from './admin-API/applications-controller/applications-controller-slice';

//import controllersSlice from './admin-API/applications-controller/applications-controller-slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [controllersSlice.reducerPath]: controllersSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;