import { configureStore } from '@reduxjs/toolkit';

import HeaderSlice from './headerSlice/headerSlice';

import { persistStore } from 'redux-persist';

import {applications_controlle} from './admin-API/applications-controller/applications_controller'

import {user_app_management} from './admin-API/user-app-management-controller/user_app_management_controller'

import {global_parameter_controller} from './admin-API/global-parameter-controller/global_parameter_controller'


export const store = configureStore({
  reducer: {

    [applications_controlle.reducerPath]: applications_controlle.reducer,
    [user_app_management.reducerPath]: user_app_management.reducer,
    [global_parameter_controller.reducerPath]: global_parameter_controller.reducer,

    [HeaderSlice.reducerPath]: HeaderSlice.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      applications_controlle.middleware,
      user_app_management.middleware,
      global_parameter_controller.middleware,
    ]),

});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { persistor };
export type AppDispatch = typeof store.dispatch;