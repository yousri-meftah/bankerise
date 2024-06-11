import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';


import { modules_controll } from './admin-API/modules-controller/modules-controller';
import {applications_controlle} from './admin-API/applications-controller/applications_controller'
import {user_app_management} from './admin-API/user-app-management-controller/user_app_management_controller'
import {global_parameter_controller} from './admin-API/global-parameter-controller/global_parameter_controller'
import { roles_controll } from './admin-API/roles-controller/roles-controller';
import {dashboard_controller} from './admin-API/dashboard-controller/dashboard_controller'


export const store = configureStore({
  reducer: {
    [applications_controlle.reducerPath]: applications_controlle.reducer,
    [modules_controll.reducerPath]: modules_controll.reducer,
    [user_app_management.reducerPath]: user_app_management.reducer,
    [global_parameter_controller.reducerPath]: global_parameter_controller.reducer,
    [roles_controll.reducerPath]: roles_controll.reducer,
    [dashboard_controller.reducerPath]: dashboard_controller.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      applications_controlle.middleware,
      modules_controll.middleware,
      user_app_management.middleware,
      global_parameter_controller.middleware,
      roles_controll.middleware,
      dashboard_controller.middleware,
    ]),

});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { persistor };
export type AppDispatch = typeof store.dispatch;