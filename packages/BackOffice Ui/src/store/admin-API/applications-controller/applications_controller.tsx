import { createApi } from '@reduxjs/toolkit/query/react';
import { application_controlle } from '../../../constants/store_constants';
import {axiosBaseQuery} from '../interceptor';



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const applications_controlle = createApi({
    reducerPath: application_controlle.name,
    baseQuery: axiosBaseQuery,
    endpoints: () => ({}),
});

