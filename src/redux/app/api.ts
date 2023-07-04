import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:8080/api/v1",
  baseUrl: "https://649fdd5aed3c41bdd7a6c655.mockapi.io",
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
