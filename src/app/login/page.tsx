"use client";
import styles from "@/styles/login.module.css";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";

import Link from "next/link";
import AppLogo from "@/components/logo/AppLogo";
type User = {
  email: string;
  password: string;
  rememberMe: boolean;
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => {
    reset();
    console.log("submit", data);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <section className={styles.sec}>
      <div className={styles.cont}>
        <div className={styles.content}>
          <AppLogo />
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputBox}>
              <input
                style={
                  errors.email
                    ? { border: "1px solid red" }
                    : { border: "none" }
                }
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                })}
              />
              <i>Email</i>
              {errors?.email?.type === "required" && (
                <div className={styles.requiredMesage}>email is required</div>
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
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,50}$/i,
                })}
              />
              <i>Password</i>
              {errors?.password?.type === "required" && (
                <div className={styles.requiredMesage}>
                  password is required
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
