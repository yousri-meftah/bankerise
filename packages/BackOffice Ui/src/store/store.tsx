import { configureStore } from '@reduxjs/toolkit';

import HeaderSlice from './headerSlice/headerSlice';

import { persistStore } from 'redux-persist';

import {applications_controlle} from './admin-API/applications-controller/applicatiobs_controll'


export const store = configureStore({
  reducer: {

    [applications_controlle.reducerPath]: applications_controlle.reducer,

    [HeaderSlice.reducerPath]: HeaderSlice.reducer,

  },

  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat([
      applications_controlle.middleware,
    ]),

});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { persistor };
export type AppDispatch = typeof store.dispatch;