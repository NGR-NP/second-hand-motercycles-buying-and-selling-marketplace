"use client";
import styles from "@/styles/login.module.css";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";

import Link from "next/link";
import AppLogo from "@/components/logo/AppLogo";
import { useLoginMutation } from "@/redux/auth/authApiSlice";
import { useAppDispatch } from "@/redux/app/ReduxHooks";
import { setCredentials } from "@/redux/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading, isSuccess, isError, error, status }] =
    useLoginMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginType>();
  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    console.log("submit", data);
    const { email, password, rememberMe } = data;

    // testing
    const datas: LoggedInUserData = {
      firstName: "tej",
      lastName: "karki",
      email,
      token: "hjgjhgjyghgjygf56656i76754iturdfgfgjjhgncv",
    };
    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
      dispatch(setCredentials(datas));
    } else {
      localStorage.setItem("rememberMe", "false");
      sessionStorage.setItem("auth", JSON.stringify(datas));
    }
    // 
    try {
      const res = await login({ email, password, rememberMe }).unwrap();
      dispatch(setCredentials(res.data));
      reset();
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
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
                    className="cursor-pointer"
                    onClick={handleClickShowPassword}
                  />
                ) : (
                  <BiShow
                    className="cursor-pointer"
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
            <div className={styles.inputBox}>
              <input
                type="submit"
                className="duration-300 active:scale-95 hover:scale-105"
                value="login"
              />
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
    </section>
  );
};

export default Login;
