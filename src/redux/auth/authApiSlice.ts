import { apiSlice } from "../app/api";
export const loginAuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: LoginType) => ({
        url: "/user/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = loginAuthApiSlice;

export const registerAuthSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials: RegisterType) => ({
        url: "/user/signup",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});
export const { useRegisterMutation } = registerAuthSlice;

export const VerifyOTPAuthSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyOTP: builder.mutation({
      query: (credentials: any) => ({
        url: "/user/verification",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});
export const { useVerifyOTPMutation } = VerifyOTPAuthSlice;
