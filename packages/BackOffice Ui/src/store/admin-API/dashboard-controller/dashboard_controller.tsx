import { createApi } from '@reduxjs/toolkit/query/react';
import { dashboard_controlle } from '../../../constants/store_constants';
import {axiosBaseQuery} from '../interceptor';



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const dashboard_controller = createApi({
    reducerPath: dashboard_controlle.name,
    baseQuery: axiosBaseQuery,
    endpoints: () => ({}),
});

