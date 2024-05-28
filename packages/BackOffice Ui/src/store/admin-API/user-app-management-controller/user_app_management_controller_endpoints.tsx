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
    getuserbyid: builder.query({
      query: (id: number ) => {
        return {
          url: `${user_app_management_controller_endpoints.getuserbyid}/${id}`,
        };
      },

    }),
    getavailableusersid: builder.query({
      query: (arg) => {
        const { appId, param } = arg;
        return {
          url: `${user_app_management_controller_endpoints.ConfigApplication}/${appId}/users/keycloak-available?params=${param}`,
        };
      },

    }),
    addUser: builder.mutation({
      query: (arg) => {
        //console.log("argaaaa = ",arg)
        const { appId, data } = arg;
        //console.log("data = ",data)
        return {
          url: `${user_app_management_controller_endpoints.ConfigApplication}/${appId}/users`,
          method: 'POST',
          data: data,
        };
      },

    }),

    }),
});


export const {
  useGetuserbyapplicationidQuery,
  useGetuserbyidQuery,
  useGetavailableusersidQuery,
  useAddUserMutation,

} = applicationEndpoints;

