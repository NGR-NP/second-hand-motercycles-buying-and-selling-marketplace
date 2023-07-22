"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import styles from "@/styles/register.module.css";
import AppLogo from "@/components/logo/AppLogo";
import { BiShow, BiHide } from "react-icons/bi";
import Link from "next/link";
import { useAppDispatch } from "@/redux/app/ReduxHooks";
import { useRegisterMutation } from "@/redux/auth/authApiSlice";

const Register = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading, isSuccess, isError, error, status }] =
    useRegisterMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<RegisterType>();
  const onSubmit: SubmitHandler<RegisterType> = async (data: RegisterType) => {
    console.log("submit", data);
    const { email, password, firstName, lastName, contact } = data;
    try {
      const res = await login({
        email,
        password,
        firstName,
        lastName,
        contact,
      }).unwrap();
      dispatch(res.data);
      reset();
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <section className={styles.sec}>
      <div className={styles.cont}>
        <div className={`${styles.content} w-full max-sm:w-10/12`}>
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
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First name is Required!!",
                  },
                })}
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
                className="shadow-lg"
                style={
                  errors.lastName?.type === "required"
                    ? { border: "1px solid red" }
                    : { border: "none" }
                }
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last name is Required!!",
                  },
                })}
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
                  required: {
                    value: true,
                    message: "Email is Required!!",
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
                placeholder="98********"
                type="tel"
                style={
                  errors.contact
                    ? { border: "1px solid red" }
                    : { border: "none" }
                }
                {...register("contact", {
                  required: {
                    value: true,
                    message: "contact number is Required!!",
                  },
                  minLength: {
                    value: 10,
                    message: "invalid contact  number",
                  },
                  maxLength: {
                    value: 14,
                    message: "invalid contact number length",
                  },
                  pattern: {
                    value: /^(\+?[0-9]{1,4})?[-\s]?[7-9]{1}\d{8}$/,
                    message: "Invalid contact number format",
                  },
                })}
              />
              <i>contact Number</i>
              {errors?.contact && (
                <div className={styles.requiredMesage}>
                  {errors.contact.message}
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
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,50}$/i,
                    message:
                      "Password must contain at least one NUMBER, one CAPITAL case Letter, one lower case letter, and one special character",
                  },
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
                  <BiHide onClick={handleClickShowPassword} />
                ) : (
                  <BiShow onClick={handleClickShowPassword} />
                )}
              </div>
            </div>

            <div className={styles.inputBox}>
              <input
                type="submit"
                className="duration-300 active:scale-95 hover:scale-105"
                value="Register"
              />
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
