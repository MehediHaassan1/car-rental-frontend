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
    loginUser: builder.mutation({
      query: (payload) => {
        return {
          url: '/auth/signin',
          method: 'POST',
          body: payload,
        }
      }
    })
  }),
})

export const { useCreateUserMutation, useLoginUserMutation } = authApi;