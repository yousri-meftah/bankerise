
import {applications_controlle} from './applicatiobs_controll';
import { application_controlle_endpoints } from '../../../constants/store_constants';


const applicationEndpoints = applications_controlle.injectEndpoints({
  endpoints: (builder) => ({
    getConfigApplication: builder.query({
      query: (attr) => ({
        url: application_controlle_endpoints.ConfigApplication,
        params: attr
      })
    }),
    putConfigApplication: builder.mutation({
      query: (data) => ({
        url: application_controlle_endpoints.ConfigApplication,
        method: 'PUT',
        body: data
      }),
    }),
    postConfigApplication: builder.mutation({
      query: (data) => ({
        url: application_controlle_endpoints.ConfigApplication,
        method: 'POST',
        body: data
      }),
    }),
    putFeatures: builder.mutation({
      query: (data) => ({
        url: application_controlle_endpoints.Features,
        method: 'PUT',
        body: data
      }),
    }),
    putComposedPermissions: builder.mutation({
      query: (data) => ({
        url: application_controlle_endpoints.ComposedPermissions,
        method: 'PUT',
        body: data
      }),
    }),
    postComposedPermissions: builder.mutation({
      query: (data) => ({
        url: application_controlle_endpoints.ComposedPermissions,
        method: 'POST',
        body: data
      }),
    }),
    deleteComposedPermissions: builder.mutation({
      query: (data) => ({
        url: application_controlle_endpoints.ComposedPermissions,
        method: 'DELETE',
        body: data
      }),
    }),
    getApplicationById: builder.query({
      query: ({ id, attr }) => ({
        url: `/${id}`,
        params: attr
      })
    }),
    getRegistrationMapping: builder.query({
      query: () => ({
        url: application_controlle_endpoints.RegistrationMapping,
      })
    }),
    getFeatureById: builder.query({
      query: ({ id }) => ({
        url: `${application_controlle_endpoints.Features}/${id}`,
      })
    }),
    getComposedPermissionsById: builder.query({
      query: ({ id }) => ({
        url: `${application_controlle_endpoints.ComposedPermissions}/${id}`,
      })
    }),
    getComposedPermissionById: builder.query({
      query: ({ id }) => ({
        url: `/composed-permissions/relatedRole/${id}`,
      }),
    }),
    getComposedPermissionDetail: builder.query({
      query: ({ attr }) => ({
        url: '/composed-permissions/detail',
        params: attr
      }),
    }),
    getComposedPermissionDetailById: builder.query({
      query: ({ id }) => ({
        url: `/composed-permissions/detail/${id}`,
      }),
    }),
    getAvailableClients: builder.query({
      query: (audience) => ({
        url: `/available-clients/${audience}`,
      }),
    }),
    getAttributesById: builder.query({
      query: ({ id }) => ({
        url: `/attributes/${id}`,
      }),
    }),
  }),
});

export const {
  useGetConfigApplicationQuery,
  usePutConfigApplicationMutation,
  usePostConfigApplicationMutation,
  usePutFeaturesMutation,
  usePutComposedPermissionsMutation,
  usePostComposedPermissionsMutation,
  useDeleteComposedPermissionsMutation,
  useGetApplicationByIdQuery,
  useGetRegistrationMappingQuery,
  useGetFeatureByIdQuery,
  useGetComposedPermissionsByIdQuery,
  useGetComposedPermissionByIdQuery,
  useGetComposedPermissionDetailQuery,
  useGetComposedPermissionDetailByIdQuery,
  useGetAvailableClientsQuery,
  useGetAttributesByIdQuery
} = applicationEndpoints;

