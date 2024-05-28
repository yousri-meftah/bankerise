import {global_parameter_controller} from './global_parameter_controller';
import { global_parameter_controlle_endpoints } from '../../../constants/store_constants';
//import { global_reponse } from './global_parameter_controller_schema';



const applicationEndpoints = global_parameter_controller.injectEndpoints({
  endpoints: (builder) => ({
    getglobalparams: builder.query({
      query: () => ({
        url: global_parameter_controlle_endpoints.global_param,
      }),

    }),
    getglobalparamsbyname: builder.query({
      query: (name:string) => ({
        url: `${global_parameter_controlle_endpoints.global_param_byname}?pageable=1&name=${name}`,

      }),

    }),

    }),
});


export const {
  useGetglobalparamsQuery,
  useGetglobalparamsbynameQuery
} = applicationEndpoints;

