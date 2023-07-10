import { apiSlice } from "../app/api";

export const SingleProductApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    SingleProduct: builder.query({
      query: ({ id }: any) => `/products/${id}`,
      keepUnusedDataFor: 20,
    }),
  }),
});

export const { useSingleProductQuery } = SingleProductApiSlice;
