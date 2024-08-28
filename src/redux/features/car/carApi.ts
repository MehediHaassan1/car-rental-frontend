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
      }
    }),
    getSingleCar:builder.query({
      query: (id)=>{
        return {
          url: `/cars/${id}`,
          method: 'GET',
        }
      }
    }),
    searchCars: builder.mutation({
      query: (searchData) => {
        return {
          url: '/cars/search-cars',
          method: 'POST',
          body: searchData,
        }
      }
    })
  }),
})

export const { useGetAllCarsQuery, useGetSingleCarQuery, useSearchCarsMutation } = carApi;