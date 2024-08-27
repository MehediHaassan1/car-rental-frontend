import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => {
        return {
          url: '/cars',
          method: 'GET',
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

export const { useGetAllCarsQuery, useLoginUserMutation } = carApi;