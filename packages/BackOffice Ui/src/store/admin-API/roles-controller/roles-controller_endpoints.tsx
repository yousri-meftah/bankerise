import {  roles_controller_endpoints } from '../../../constants/store_constants';
import { roles_controll } from './roles-controller';


const rolesEndpoints = roles_controll.injectEndpoints({
    endpoints: (builder) => ({
        GetAllRoles: builder.query({
          query: (attr) => ({
            url: `${roles_controller_endpoints.GetAllRoles}/${attr}/roles`,  // Correctly place attr in the URL
            params: attr
          })
        }),
      getrolebyid: builder.query({
      query: (arg) => {
        const { appId, data } = arg;
        return {
          url: `${user_app_management_controller_endpoints.ConfigApplication}/${appId}/users`,
          method: 'POST',
          body: data
        };
      },

    }),
      }),
    });
export const {
  useGetAllRolesQuery,

} = rolesEndpoints;