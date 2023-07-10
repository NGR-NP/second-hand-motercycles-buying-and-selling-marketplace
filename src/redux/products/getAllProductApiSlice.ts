import { apiSlice } from "../app/api";

export const GetAllProductApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetAllProduct: builder.query({
      query: () => `/admin/view_all_products`,
      // query: () => `/products`,
      keepUnusedDataFor: 20,
    }),
  }),
});

export const { useGetAllProductQuery } = GetAllProductApiSlice;
