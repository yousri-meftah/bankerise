import axios, { AxiosRequestConfig } from 'axios';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

const axiosInstance = axios.create({
  baseURL: '/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['X-APP-ID'] = "back-office";
    config.headers['CHANNEL'] = "WEB";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    //console.log("yousir = " , response)
    return response;
  },
  (error) => {
    console.error(' Errorrrrrrrrrr     ====== ', error);
    if(error.message === "Network Error"&&error.name === "AxiosError")
      window.location.reload();

    return Promise.reject(error);
  }
);

export const axiosBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
) => {
    try {
        const result = await axiosInstance(args as AxiosRequestConfig<unknown>);
        return { data: result.data, error: undefined };
    } catch (axiosError) {
        const err: FetchBaseQueryError = axiosError as FetchBaseQueryError;
        return {
            error: err,
            data: undefined
        };
    }
};
