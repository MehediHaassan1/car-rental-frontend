import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
      query: (payload) => {
        return {
          url: '/users/update-profile',
          method: 'PUT',
          body: payload,
        }
      },
      invalidatesTags: ['user'],
    }),
  }),
})

export const { useGetMeQuery, useUpdateUserMutation } = userApi;