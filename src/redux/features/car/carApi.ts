import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: ({ name, carType, price, location }) => {
        const params = new URLSearchParams();
        if (name) {
          params.append('name', name);
        }
        if (carType) {
          params.append('carType', carType);
        }
        if (price > 100) {
          params.append('price', price);
        }
        if (location) {
          params.append('location', location);
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
    })
  }),
})

export const { 
  useGetAllCarsQuery, 
  useGetSingleCarQuery, 
  useSearchCarsQuery, 
  useDeleteCarMutation ,
  useAddCarMutation,
} = carApi;