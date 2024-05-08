import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { user_app_management_controller } from '../../../constants/store_constants';




// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const user_app_management = createApi({
    reducerPath: user_app_management_controller.name,
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: (headers) => {
            headers.set('X-APP-ID', user_app_management_controller.header.X_APP_ID);  // Set statically as per your example
            headers.set('CHANNEL', user_app_management_controller.header.CHANNEL);  // Set statically as well
            return headers;
        }
        }),
    endpoints: () => ({}),
});

