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
      }),
    });
export const {
  useGetAllRolesQuery,
  
} = rolesEndpoints;