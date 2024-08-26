import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => {
        return {
          url: '/auth/signup',
          method: 'POST',
          body: userInfo,
        }
      }
    }),
  }),
})

export const { useCreateUserMutation } = authApi;