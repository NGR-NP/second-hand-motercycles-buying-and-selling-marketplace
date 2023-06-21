"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./register.module.css";
import { ChangeEvent, useState } from "react";
import AppLogo from "@/components/logo/AppLogo";
import { BiShow, BiHide } from "react-icons/bi";
import Link from "next/link";
type User = {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
};
const Register = () => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => console.log(data);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className={styles.sec}>
      <div className={styles.cont}>
        <div className={styles.content}>
          <AppLogo />
          <h2>Register</h2>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputBox}>
              <input
                style={
                  errors.firstName
                    ? { border: "1px solid red" }
                    : { border: "none" }
                }
                {...register("firstName", { required: true })}
              />
              <i>First Name</i>
              {errors?.firstName?.type === "required" && (
                <div className={styles.requiredMesage}>
                  first name is required
                </div>
              )}
            </div>
            <div className={styles.inputBox}>
              <input
                style={
                  errors.lastName?.type === "required"
                    ? { border: "1px solid red" }
                    : { border: "none" }
                }
                {...register("lastName", { required: true })}
              />
              <i>Last Name</i>
              <div className={styles.requiredMesage}>
                {errors?.lastName?.type === "required" &&
                  "last name is required"}
              </div>
            </div>
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

            <div className={styles.inputBox}>
              <input type="submit" value="Register" />
            </div>
          </form>
          <div style={{ color: "white" }}>
            Already have an Account?{" "}
            <Link style={{ color: "hsl(0, 100%, 89%)" }} href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
