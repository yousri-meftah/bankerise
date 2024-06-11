import {user_app_management} from './user_app_management_controller';
import { user_app_management_controller_endpoints } from '../../../constants/store_constants';
//import { ApplicationUser_query, user_response } from './user_app_management_controller_schema';





const applicationEndpoints = user_app_management.injectEndpoints({
  endpoints: (builder) => ({
    getuserbyapplicationid: builder.query({
      query: (arg ) => {
        const { appId, params } = arg;
        console.log("params = ",params)
        const queryParams = {
          pageable: params.pageable,
          ...(params.email && { "user.email": params.email }),
          ...(params.firstName && { "user.firstname": params.firstName }),
          ...(params.from && { from: params.from }),
          ...(params.lastName && { "user.firstname": params.lastName }),
          ...(params.role && { "role.name": params.role }),
          ...(params.to && { to: params.to }),
          ...(params.userName && { "user.name": params.userName }),
          ...(params.active !== undefined && { active: params.active }), // to handle boolean properly
          ...(params.metaData && { metaData: params.metaData }),
          ...(params.preferredLanguage && { preferredLanguage: params.preferredLanguage }),
          ...(params.segmentAssignmentId && { segmentAssignmentId: params.segmentAssignmentId }),
          ...(params.segmentAssignmentLevel && { segmentAssignmentLevel: params.segmentAssignmentLevel }),
          ...(params.segmentId && { segmentId: params.segmentId }),
          ...(params.id && { id: params.id }),
          //...(params.user && { "role.user": params.user }),
          ...(params.blockingReason && { blockingReason: params.blockingReason }),
        };
        console.log("queryParams = ",queryParams)
        return {
          url: `${user_app_management_controller_endpoints.ConfigApplication}/${appId}/users`,
          params : queryParams
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
        const { appId, data } = arg;
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

