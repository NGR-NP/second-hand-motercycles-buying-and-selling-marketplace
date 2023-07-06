import { apiSlice } from "../app/api";
export const getAllUsersAPiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ page, limit }) => `/users/all?page=${page}&limit=${limit}`,
      keepUnusedDataFor: 3,
    }),
  }),
});
export const {useGetAllUsersQuery } = getAllUsersAPiSlice;