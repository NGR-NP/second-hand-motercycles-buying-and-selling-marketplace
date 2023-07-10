import { apiSlice } from "../app/api";
export const getAllUsersAPiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ page, limit }: any) => `/admin/view_all_users`,
      keepUnusedDataFor: 3,
    }),
  }),
});
export const { useGetAllUsersQuery } = getAllUsersAPiSlice;
