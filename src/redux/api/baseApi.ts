/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';
import { removeUser, setUser } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;

    if (token) {
      headers.set("authorization", `bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType> = async (args, api, extraOptions): Promise<any> => {

    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 404) {
      console.log("Result 404", result)
    }
    if (result?.error?.status === 403) {
      console.log("Result 403", result)
    }

    if (result?.error?.status === 401) {
      console.log('sending refresh token')

      const res = await fetch('http://localhost:5000/api/auth/refresh-token ', {
        method: 'POST',
        credentials: 'include',
      });
      const data = await res.json();

      const user = (api.getState() as RootState).auth.user
      if (data?.data?.accessToken && user !== null) {
        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken,
          })
        );
        result = await baseQuery(args, api, extraOptions);
      } else{
        api.dispatch(removeUser())
      }
    }

    return result;
  }

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['user', 'car', 'booking'],
  endpoints: () => ({}),
})