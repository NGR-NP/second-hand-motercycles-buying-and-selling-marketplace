"use client";
import styles from "./login.module.css";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";

import Link from "next/link";
import AppLogo from "@/components/logo/AppLogo";
type User = {
  email: string;
  password: string;
};
const Login = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => console.log("submit", data);

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
                  <BiHide onClick={handleClickShowPassword} />
                ) : (
                  <BiShow onClick={handleClickShowPassword} />
                )}
              </div>
            </div>

            <div style={{ color: "white", textAlign: "end" }}>
              <Link style={{ color: "white" }} href="/reset-password">
                Forgot password ?
              </Link>
            </div>
            <div className={styles.inputBox}>
              <input type="submit" value="login" />
            </div>
          </form>
          <div style={{ color: "white" }}>
            Do you have an account?{" "}
            <Link style={{ color: "hsl(0, 100%, 89%)" }} href="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
