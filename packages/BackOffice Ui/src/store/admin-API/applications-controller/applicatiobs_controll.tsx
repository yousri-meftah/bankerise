import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';
import { application_controlle } from '../../../constants/store_constants';




// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const applications_controlle = createApi({
    reducerPath: application_controlle.name,
    baseQuery: fetchBaseQuery({
        baseUrl: application_controlle.API_URL,
        prepareHeaders: (headers, { getState }) => {
            // Access the current state
            const state: RootState = getState() as RootState;
            const { X_APP_ID, CHANNEL, X_Device_Id } = state.controllers;

            // Set the headers dynamically
            if (X_APP_ID) headers.set(
                application_controlle.header.X_APP_ID   ,   X_APP_ID
            );
            if (CHANNEL) headers.set(
                application_controlle.header.CHANNEL, CHANNEL
            );
            if (X_Device_Id) headers.set(
                application_controlle.header.X_Device_Id, X_Device_Id
            );

            return headers;
        },
    }),
    endpoints: () => ({}),
});
