import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { application_controlle } from '../../../constants/store_constants';




// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const applications_controlle = createApi({
    reducerPath: application_controlle.name,
    baseQuery: fetchBaseQuery({
        baseUrl: application_controlle.API_URL,
        prepareHeaders: (headers) => {
            headers.set('X-APP-ID', "back-office");
            headers.set('CHANNEL', "WEB");
            return headers;
        }
        }),
    endpoints: () => ({}),
});

