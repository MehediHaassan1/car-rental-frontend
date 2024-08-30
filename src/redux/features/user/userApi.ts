import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllUsers: builder.query({
      query: () => {
        return {
          url: '/users',
          method: 'GET',
        }
      },
      providesTags: ['user'],
    }),

    getSingleUser: builder.query({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: 'GET',
        }
      },
      providesTags: ['user'],
    }),

    deleteUsers: builder.mutation({
      query: (id) => {
        return {
          url: `/users/delete-user/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['user'],
    }),

    makeAdmin: builder.mutation({
      query: (id) => {
        return {
          url: `/users/make-admin/${id}`,
          method: 'PATCH',
        }
      },
      invalidatesTags: ['user'],
    }),

    getMe: builder.query({
      query: () => {
        return {
          url: '/users/me',
          method: 'GET',
        }
      },
      providesTags: ['user'],
    }),

    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `/users/update-profile`,
          method: 'PUT',
          body: data,
        }
      },
      invalidatesTags: ['user'],
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useMakeAdminMutation,
  useDeleteUsersMutation,
  useGetMeQuery,
  useUpdateUserMutation,
  useGetSingleUserQuery
} = userApi;