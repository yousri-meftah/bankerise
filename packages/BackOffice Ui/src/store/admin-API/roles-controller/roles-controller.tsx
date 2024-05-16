import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {roles_controller } from '../../../constants/store_constants';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const roles_controll = createApi({
    reducerPath: roles_controller.name,
    baseQuery: fetchBaseQuery({
        baseUrl: roles_controller.API_URL,
        prepareHeaders: (headers) => {  
            headers.set(
                "X-APP-ID"  ,   "back-office"
            );
            headers.set(
                roles_controller.header.CHANNEL, "WEB"
            );
            return headers;
        },
    }),
    endpoints: () => ({}),
});
