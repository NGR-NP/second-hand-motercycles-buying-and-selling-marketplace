import { apiSlice } from "../app/api";

export const UpdateUserInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserInfo: builder.mutation({
      query: ({ id, ...credentials }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useUpdateUserInfoMutation } = UpdateUserInfoApiSlice;
