import { createApi } from '@reduxjs/toolkit/query/react';
import { user_app_management_controller } from '../../../constants/store_constants';
import {axiosBaseQuery} from '../interceptor';

export const user_app_management = createApi({
    reducerPath: user_app_management_controller.name,
    baseQuery: axiosBaseQuery,
    endpoints: () => ({}),
});

