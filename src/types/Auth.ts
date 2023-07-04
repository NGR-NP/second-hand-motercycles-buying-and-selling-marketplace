type LoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type LoggedInUserData = {
  firstName: string;
  lastName: string;
  email: string;
  number: number;
  role: "admin" | "user";
  token: string;
};
type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  number: number;
  password: string;
  role?: "admin" | "user";
  isVerified?: boolean;
};
