import { apiSlice } from "../app/api";

export const DeleteUserProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteUserProfile: builder.mutation({
      query: ({ id, ...credentials }) => ({
        url: `/user/${id}`,
        method: "DELETE",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useDeleteUserProfileMutation } = DeleteUserProfileApiSlice;
