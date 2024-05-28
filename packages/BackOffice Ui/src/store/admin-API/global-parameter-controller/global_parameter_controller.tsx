import { createApi } from '@reduxjs/toolkit/query/react';
import { global_parameter_controlle } from '../../../constants/store_constants';
import {axiosBaseQuery} from '../interceptor';


export const global_parameter_controller = createApi({
    reducerPath: global_parameter_controlle.name,
    baseQuery: axiosBaseQuery,
    endpoints: () => ({}),
});

