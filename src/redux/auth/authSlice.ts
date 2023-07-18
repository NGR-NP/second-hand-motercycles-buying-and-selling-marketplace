"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  auth: LoggedInUserData | null;
};

const initialState: AuthState = {
  auth: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoggedInUserData>) => {
      const { firstName, email, lastName, token, role, image, contact } =
        action.payload;
      state.auth = {
        firstName: firstName ?? state.auth?.firstName,
        lastName: lastName ?? state.auth?.lastName,
        email: email ?? state.auth?.email,
        role: role ?? state.auth?.role,
        contact: contact ?? state.auth?.contact,
        image: image ?? state.auth?.image,
        token: token ?? state.auth?.token,
      };
    },
    logout: () => {
      return initialState;
    },
  },
});
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUserInfo = (state: { auth: AuthState }) =>
  state.auth.auth;

export const selectCurrentFirstName = (state: { auth: AuthState }) =>
  state.auth.auth?.firstName;

export const selectCurrentLastName = (state: { auth: AuthState }) =>
  state.auth.auth?.lastName;

export const selectCurrentRole = (state: { auth: AuthState }) =>
  state.auth.auth?.role;
export const selectCurrentContact = (state: { auth: AuthState }) =>
  state.auth.auth?.contact;

export const selectCurrentImage = (state: { auth: AuthState }) =>
  state.auth.auth?.image;

export const selectCurrentToken = (state: { auth: AuthState }) =>
  state.auth.auth?.token;
