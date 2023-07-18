type LoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type LoggedInUserData = {
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  image: string;
  role: "admin" | "user";
  token: string;
  isVerified?: boolean;
};
type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
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
  contact: number;
  email: string;
  role: "admin" | "user";
  isVerified: boolean;
  
};
