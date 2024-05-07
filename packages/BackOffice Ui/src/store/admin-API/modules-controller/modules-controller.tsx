import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { modules_controller } from '../../../constants/store_constants';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const modules_controll = createApi({
    reducerPath: modules_controller.name,
    baseQuery: fetchBaseQuery({
        baseUrl: modules_controller.API_URL,
        prepareHeaders: (headers) => {  
            headers.set(
                "X-APP-ID"  ,   "back-office"
            );
            headers.set(
                modules_controller.header.CHANNEL, "WEB"
            );
            return headers;
        },
    }),
    endpoints: () => ({}),
});
