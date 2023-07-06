import { apiSlice } from "../app/api";

export const GetAllProductApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetAllProduct: builder.query({
      query: () => `/products/show_products`,
      keepUnusedDataFor: 20,
    }),
  }),
});

export const { useGetAllProductQuery } = GetAllProductApiSlice;
