import { apiSlice } from "../app/api";

export const UpdateStatusApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateStatus: builder.mutation({
      query: ({ path, dataId, status, ...credentials }) => ({
        url: `/update-status/${path}/${dataId}?${status}`,
        method: "PUT",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useUpdateStatusMutation } = UpdateStatusApiSlice;
