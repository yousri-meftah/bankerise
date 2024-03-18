import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';


const API_URL = "http://platform-backend-api.dev.proxym-it.tn/bankerise-platform/configuration/applications";



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            // Access the current state
            const state: RootState = getState() as RootState;
            const { X_APP_ID, CHANNEL, X_Device_Id } = state.controllers;

            // Set the headers dynamically
            if (X_APP_ID) headers.set('X-APP-ID', X_APP_ID);
            if (CHANNEL) headers.set('CHANNEL', CHANNEL);
            if (X_Device_Id) headers.set('X-Device-Id', X_Device_Id);

            return headers;
        },
    }),
    //tagTypes: ["Post"],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endpoints: (builder) => ({}),
});
