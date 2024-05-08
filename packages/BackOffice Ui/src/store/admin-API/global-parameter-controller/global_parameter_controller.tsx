import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { global_parameter_controlle } from '../../../constants/store_constants';


export const global_parameter_controller = createApi({
    reducerPath: global_parameter_controlle.name,
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: (headers) => {
            headers.set('X-APP-ID', global_parameter_controlle.header.X_APP_ID);  // Set statically as per your example
            headers.set('CHANNEL', global_parameter_controlle.header.CHANNEL);  // Set statically as well
            return headers;
        }
        }),
    endpoints: () => ({}),
});

