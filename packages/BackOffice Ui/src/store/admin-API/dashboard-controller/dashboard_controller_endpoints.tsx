
import {dashboard_controller} from './dashboard_controller';
import { dashboard_controlle_endpoints } from '../../../constants/store_constants';
//import {ApplicationDto} from './application_controller_schemas';

const dashboardendpoints = dashboard_controller.injectEndpoints({
  endpoints: (builder) => ({
    getloginstats: builder.query({
      query: (dayback) => ({
        url: `${dashboard_controlle_endpoints.loginstat}`,
        params: ({ day_back:dayback }),
      }),
    }),
    getplatforminfo: builder.query({
      query: () => ({
        url: `${dashboard_controlle_endpoints.totalusers}`,
      }),
    }),
    gethourstats: builder.query({
    query: (activityDate) => {
      const params = activityDate ? { activityDate: activityDate } : {};
      return {
        url: `${dashboard_controlle_endpoints.hourstat}`,
        params: params,
      };
    },
}),

  }),
});

export const {
  useGetloginstatsQuery,
  useGethourstatsQuery,
  useGetplatforminfoQuery

} = dashboardendpoints;

