
import {apiSlice} from '../../api/apiSlice';


const applicationEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConfigApplication: builder.query({
      query: (attr) => ({
        url: '/',
        params: attr
      })
    }),
    putConfigApplication: builder.mutation({
      query: (data) => ({
        url: '/',
        method: 'PUT',
        body: data
      }),
    }),
    postConfigApplication: builder.mutation({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data
      }),
    }),
    putFeatures: builder.mutation({
      query: (data) => ({
        url: '/features',
        method: 'PUT',
        body: data
      }),
    }),
    putComposedPermissions: builder.mutation({
      query: (data) => ({
        url: '/composed-permissions',
        method: 'PUT',
        body: data
      }),
    }),
    postComposedPermissions: builder.mutation({
      query: (data) => ({
        url: '/composed-permissions',
        method: 'POST',
        body: data
      }),
    }),
    deleteComposedPermissions: builder.mutation({
      query: (data) => ({
        url: '/composed-permissions',
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
        url: '/registration-mapping',
      })
    }),
    getFeatureById: builder.query({
      query: ({ id }) => ({
        url: `/features/${id}`,
      })
    }),
    getComposedPermissionsById: builder.query({
      query: ({ id }) => ({
        url: `/composed-permissions/${id}`,
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

