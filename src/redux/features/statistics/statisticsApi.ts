import { baseApi } from "../../api/baseApi";

const statisticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminStats: builder.query({
      query: () => {
  
          return {
              url: `/stats/admin-statistics`,
              method: 'GET',
          };
      },
  }),

    

  }),
})

export const {
  useGetAdminStatsQuery,
} = statisticsApi;