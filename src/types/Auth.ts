type LoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type LoggedInUserData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  image: string;
  role: "admin" | "user";
  token: string;
};
type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  role?: "admin" | "user";
  isVerified?: boolean;
};
type VerifyOtpType = {
  otp: string;
};
type UserInfo = {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  role: "admin" | "user";
};
