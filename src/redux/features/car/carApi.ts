import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: ({ carType, price }) => {
        const params = new URLSearchParams();

        if (carType) {
          params.append('carType', carType);
        }
        if (price > 0) {
          params.append('price', price);
        }
        return {
          url: '/cars',
          method: 'GET',
          params,
        }
      },
      providesTags: ['car'],
    }),

    getSingleCar: builder.query({
      query: (id) => {
        return {
          url: `/cars/${id}`,
          method: 'GET',
        }
      },
      providesTags: ['car'],
    }),

    searchCars: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args?.carType) {
          params.append('carType', args.carType);
        }
        if (args?.features) {
          params.append('features', args.features);
        }
        if (args?.seats) {
          params.append('seats', args.seats);
        }
        return {
          url: '/cars/search-cars',
          method: 'GET',
          params,
        }
      },
      providesTags: ['car'],
    }),

    deleteCar: builder.mutation({
      query: (payload) => {
        return {
          url: `/cars/delete-car/${payload.id}`,
          method: "PUT",
          body: { isDeleted: payload.status },
        }
      },
      invalidatesTags: ['car'],
    }),

    addCar: builder.mutation({
      query: (payload) => {
        return {
          url: '/cars',
          method: 'POST',
          body: payload
        }
      },
      invalidatesTags: ['car'],
    }),

    updateCar: builder.mutation({
      query: (payload) => {
        console.log(payload)
        return {
          url: `/cars/${payload.id}`,
          method: 'PUT',
          body: payload.data,
        }
      },
      invalidatesTags: ['car'],
    })

  }),
})

export const {
  useGetAllCarsQuery,
  useGetSingleCarQuery,
  useSearchCarsQuery,
  useDeleteCarMutation,
  useAddCarMutation,
  useUpdateCarMutation,
} = carApi;