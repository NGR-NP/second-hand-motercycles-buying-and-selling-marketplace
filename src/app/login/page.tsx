"use client";
import styles from "@/styles/login.module.css";
import { useRef, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";

import Link from "next/link";
import AppLogo from "@/components/logo/AppLogo";
import { useLoginMutation } from "@/redux/auth/authApiSlice";
import { useAppDispatch } from "@/redux/app/ReduxHooks";
import { setCredentials } from "@/redux/auth/authSlice";
import OtpVerifyDialog from "./OtpVerifyDialog";
import { toast } from "react-toastify";
import LoadingCircleSvg from "@/components/svg/loading/LoadingCircleSvg";

const Login = () => {
  const verifyOTPRef = useRef<HTMLDialogElement>(null);

  const closeDialog = () => {
    verifyOTPRef?.current?.close();
  };
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading, isSuccess, isError, error, status }]: any =
    useLoginMutation();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginType>();
  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    const datas: LoggedInUserData = {
      firstName: "tej",
      lastName: "karki",
      image: "https://jfj.png",
      email: "e",
      phone: 9339,
      role: "admin",
      token: "hjgjhgjyghgjygf56656i76754iturdfgfgjjhgncv",
    };
    dispatch(setCredentials(datas));
    if (isLoading) return;
    const { email, password, rememberMe } = data;
    try {
      verifyOTPRef.current?.showModal();
      const res = await login({ email, password, rememberMe }).unwrap();

      if (res?.data?.message === "email is not verifyed!!") {
        sessionStorage.setItem("verifyOtp", res?.data?.token);
        verifyOTPRef.current?.showModal();
      } else if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
        dispatch(setCredentials(res.data));
      } else {
        localStorage.setItem("rememberMe", "false");
        sessionStorage.setItem("auth", JSON.stringify(res.data));
      }
    } catch (err) {
      console.log(error);
      toast.error(`${error?.data?.msg}`);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      <section className={`${styles.sec}`}>
        <div className={styles.cont}>
          <div className={`${styles.content} w-full max-sm:w-10/12`}>
            <AppLogo />
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={`${styles.inputBox}`}>
                <input
                  style={
                    errors.email
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  {...register("email", {
                    required: {
                      value: true,
                      message: "enter your email !!",
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                      message: "invaild email format!!",
                    },
                  })}
                />
                <i>Email</i>
                {errors?.email && (
                  <div className={styles.requiredMesage}>
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className={styles.inputBox}>
                <input
                  placeholder="************"
                  style={
                    errors.password
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  className={styles.inputPassword}
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "enter your password!!",
                    },
                    minLength: {
                      value: 8,
                      message: "At least 8 characters required",
                    },
                    maxLength: {
                      value: 50,
                      message: "more then 50 characters only allowed!!",
                    },
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,50}$/i,
                  })}
                />
                <i>Password</i>
                {errors?.password && (
                  <div className={styles.requiredMesage}>
                    {errors.password.message}
                  </div>
                )}

                <div className={styles.PasswordVisibleIcons}>
                  {showPassword ? (
                    <BiHide
                      className="cursor-pointer text-black1"
                      onClick={handleClickShowPassword}
                    />
                  ) : (
                    <BiShow
                      className="cursor-pointer text-black1"
                      onClick={handleClickShowPassword}
                    />
                  )}
                </div>
              </div>

              <div className="text-end">
                <Link className="text-slate-50" href="/reset-password">
                  Forgot password ?
                </Link>
              </div>
              <div className="flex gap-3 justify-start ml-4">
                <input
                  className="cursor-pointer"
                  id="rememberMe"
                  type="checkbox"
                  placeholder="rememberMe"
                  {...register("rememberMe")}
                />
                <label
                  htmlFor="rememberMe"
                  className="cursor-pointer line-clamp-1 text-slate-50"
                >
                  Remember Me
                </label>
              </div>
              <div className={`relative ${styles.inputBox}`}>
                <input
                  type="submit"
                  className="duration-300 active:scale-95 hover:scale-105"
                  value="login"
                />
                {isLoading && (
                  <LoadingCircleSvg style={"absolute top-[30%] right-4"} />
                )}
              </div>
            </form>
            <div className="text-slate-50">
              Do you have an account?{" "}
              <Link className="text-blue-500 hover:underline" href="/register">
                Register
              </Link>
            </div>
          </div>
        </div>

        <OtpVerifyDialog
          verifyOTPRef={verifyOTPRef}
          closeDialog={closeDialog}
          email={getValues("email")}
        />
      </section>
    </>
  );
};

export default Login;
