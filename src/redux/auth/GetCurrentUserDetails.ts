import { apiSlice } from "../app/api";

export const GetCurrentUserDetails = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    currentUserDetails: builder.query({
      query: ({ id }) => `/users/${id}`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCurrentUserDetailsQuery } = GetCurrentUserDetails;
