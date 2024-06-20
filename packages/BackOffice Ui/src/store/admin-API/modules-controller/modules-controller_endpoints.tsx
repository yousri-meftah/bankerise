import { modules_controller_endpoints } from '../../../constants/store_constants';
import { modules_controll } from './modules-controller';


const modulesEndpoints = modules_controll.injectEndpoints({
  endpoints: (builder) => ({
    getAllFeaturesbyId: builder.query({
      query: (attr) => ({
        url: `${modules_controller_endpoints.getAllFeaturesbyId}/${attr}`,
        params: attr
      })
    }),
    getAllChannels: builder.query({
      query: (attr) => ({
        url: `${modules_controller_endpoints.getAllChannels}/${attr}`,
        params: attr
      })
    }),
  }),
});

export const {
  useGetAllFeaturesbyIdQuery,
  useGetAllChannelsQuery,
} = modulesEndpoints;