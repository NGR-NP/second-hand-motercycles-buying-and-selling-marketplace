import { apiSlice } from "../app/api";

export const SearchProductApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchProduct: builder.query({
      query: () => `/products`,
      keepUnusedDataFor: 20,
    }),
  }),
});

export const { useSearchProductQuery } = SearchProductApiSlice;
