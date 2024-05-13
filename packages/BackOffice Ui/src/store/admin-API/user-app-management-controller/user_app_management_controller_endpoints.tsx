import {user_app_management} from './user_app_management_controller';
import { user_app_management_controller_endpoints } from '../../../constants/store_constants';
import { ApplicationUser_query, user_response } from './user_app_management_controller_schema';





const applicationEndpoints = user_app_management.injectEndpoints({
  endpoints: (builder) => ({
    getuserbyapplicationid: builder.query<user_response, {appId : number ,  params : ApplicationUser_query}>({
      query: (arg ) => {
        const { appId, params } = arg;
        return {
          url: `${user_app_management_controller_endpoints.ConfigApplication}/${appId}/users`,
          params : params
        };
      },

    }),

    }),
});


export const {
  useGetuserbyapplicationidQuery,
} = applicationEndpoints;

