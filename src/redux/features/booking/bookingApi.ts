import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: '/bookings',
          method: 'POST',
          body: data,
        }
      }
    }),
  }),
})

export const { useCreateBookingMutation } = bookingApi;