import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://649fdd5aed3c41bdd7a6c655.mockapi.io",
  baseUrl: "http://192.168.1.96:8000/api/v1",
  // baseUrl: "https://backend-production-5fc4.up.railway.app",
  // credentials: "include",
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).auth?.auth?.token;

  //   if (token) {
  //     headers.set("authorization", `Bearer ${token}`);
  //   }
  // return headers;
  // },
});
export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});
