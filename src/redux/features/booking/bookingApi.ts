import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createBooking: builder.mutation({
      query: (data) => {
        return {
          url: '/bookings',
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['car', 'booking']
    }),

    myBookings: builder.query({
      query: () => {
        return {
          url: '/bookings/my-bookings',
          method: 'GET',
        }
      },
      providesTags: ['booking']
    }),

    updateBooking: builder.mutation({
      query: (payload) => {
        console.log(payload)
        return {
          url: `/bookings/update-booking/${payload.id}`,
          method: 'PATCH',
          body: payload.bookingData,
        }
      },
      invalidatesTags: ['booking']
    }),

    deleteBooking: builder.mutation({
      query: (payload) => {
        return {
          url: `/bookings/delete-booking/${payload}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['booking']
    }),

    getAllBookings: builder.query({
      query: () => {
        return {
          url: '/bookings',
          method: "GET",
        }
      },
      providesTags: ['booking']
    }),

    getSingleBookings: builder.query({
      query: (id) => {
        return {
          url: `/bookings/${id}`,
          method: "GET",
        }
      },
      providesTags: ['booking']
    }),

    updateBookingStatus: builder.mutation({
      query: (id) => {
        return {
          url: `/bookings/update-status/${id}`,
          method: 'PATCH',
        }
      },
      invalidatesTags: ['booking']
    }),

    bookingUpdateComplete: builder.mutation({
      query: (id) => {
        return {
          url: `/bookings/booking-update-complete/${id}`,
          method: 'POST',
        }
      },
      invalidatesTags: ['booking']
    }),

    returnCar: builder.mutation({
      query: (id) => {
        return {
          url: `/cars/return-car/${id}`,
          method: 'PUT',
        }
      },
      invalidatesTags: ['booking'],
    })
  }),
})

export const {
  useCreateBookingMutation,
  useMyBookingsQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  useGetAllBookingsQuery,
  useGetSingleBookingsQuery,
  useUpdateBookingStatusMutation,
  useBookingUpdateCompleteMutation,
  useReturnCarMutation
} = bookingApi;