"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import styles from "@/styles/register.module.css";
import AppLogo from "@/components/logo/AppLogo";
import { FiMail } from "react-icons/fi";
import { BiSolidHide, BiShow } from "react-icons/bi";
import Link from "next/link";
import { useAppDispatch } from "@/redux/app/ReduxHooks";
import { useRegisterMutation } from "@/redux/auth/authApiSlice";
import LoadingCircleSvg from "@/components/svg/loading/LoadingCircleSvg";
import { toast } from "react-toastify";
import UserSvg from "@/components/svg/UserSvg";
import UserCircleSvg from "@/components/svg/UserCircleSvg";
import PhoneSvg from "@/components/svg/PhoneSvg";

const Register = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [registerRTK, { isLoading, isSuccess, isError, error, status }] =
    useRegisterMutation();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<RegisterType>();
  const onSubmit: SubmitHandler<RegisterType> = async (data: RegisterType) => {
    const { email, password, firstName, lastName, contact } = data;
    const res: any = await registerRTK({
      email,
      password,
      firstName,
      lastName,
      contact,
    });
    if (isSuccess) {
      toast.success(res?.message);
      reset();
    }

    reset();
  };
  let userNumber: any = getValues("contact");
  return (
    <section className="h-screen bg-[url('/images/background/bg-hero-section.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="absolute w-screen h-screen bg-black/20" />
      <div className="flex justify-center items-center mx-4 h-full">
        <div className="flex z-10 flex-col items-center p-4 w-full max-w-lg h-auto bg-white rounded-xl border border-white shadow-2xl">
          <div className="flex flex-col items-center space-y-2 text-xl font-semibold font-inter">
            <div>
              <AppLogo />
            </div>
            <div>Login your account</div>
          </div>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-[95%] mx-auto flex-col m-5 space-y-2">
              <div>First Name</div>
              <div className={`flex ${errors.firstName && "animate-shake"}`}>
                <input
                  className="p-2 pr-9 w-full rounded-l-md rounded-tl-md border outline-none bg-slate-100"
                  placeholder="enter your first name"
                  style={
                    errors.firstName
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "first name is required !!",
                    },
                  })}
                />
                <div className="flex right-2 items-center px-4 py-1 text-2xl text-white rounded-r-md bg-secondary">
                  <UserCircleSvg />
                </div>
              </div>
              <div className="text-red-500">{errors.firstName?.message}</div>
            </div>
            <div className="flex w-[95%] mx-auto flex-col m-5 space-y-2">
              <div>Last Name</div>
              <div className={`flex ${errors.lastName && "animate-shake"}`}>
                <input
                  className="p-2 pr-9 w-full rounded-l-md rounded-tl-md border outline-none bg-slate-100"
                  placeholder="enter your last name"
                  style={
                    errors.lastName
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "last name is required !!",
                    },
                  })}
                />
                <div className="flex right-2 items-center px-4 py-1 text-2xl text-white rounded-r-md bg-secondary">
                  <UserCircleSvg />
                </div>
              </div>
              <div className="text-red-500">{errors.lastName?.message}</div>
            </div>
            <div className="flex w-[95%] mx-auto flex-col m-5 space-y-2">
              <div>Email Address</div>
              <div className={`flex ${errors.email && "animate-shake"} group`}>
                <input
                  className="p-2 pr-9 w-full rounded-l-md rounded-tl-md border outline-none bg-slate-100"
                  // type="email"
                  placeholder="your@email.com"
                  style={
                    errors.email
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email address is required !!",
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                      message: "invaild email format!!",
                    },
                  })}
                />
                <div className="flex right-2 items-center px-4 py-1 text-2xl text-white rounded-r-md bg-secondary">
                  <FiMail />
                </div>
              </div>
              <div className="text-red-500">{errors.email?.message}</div>
            </div>
            <div className="flex w-[95%] mx-auto flex-col m-5 space-y-2">
              <div>Phone number</div>
              <div className={`flex ${errors.contact && "animate-shake"}`}>
                <input
                  className="p-2 pr-9 w-full rounded-l-md rounded-tl-md border outline-none bg-slate-100"
                  inputMode="numeric"
                  type="tel"
                  placeholder="enter your phone number"
                  style={
                    errors.contact
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  {...register("contact", {
                    required: {
                      value: true,
                      message: "phone number is required !!",
                    },
                    minLength: {
                      value: 10,
                      message: `invalid phone number (10 < ${userNumber?.length})!!`,
                    },
                    maxLength: {
                      value: 13,
                      message: `invalid phone number (13 > ${userNumber?.length})!!`,
                    },
                    pattern: {
                      value: /^[0-9]/i,
                      message: `not valid number ${userNumber} !!`,
                    },
                  })}
                />
                <div className="flex right-2 items-center px-4 py-1 text-2xl text-white rounded-r-md bg-secondary">
                  <PhoneSvg />
                </div>
              </div>
              <div className="text-red-500">{errors.contact?.message}</div>
            </div>
            <div className="flex w-[95%] mx-auto flex-col m-4 space-y-2">
              <div>Password</div>
              <div className={`flex ${errors.password && "animate-shake"}`}>
                <input
                  className="p-2 pr-9 w-full rounded-l-md rounded-tl-md border outline-none bg-slate-100"
                  type={showPassword ? "text" : "password"}
                  placeholder="************"
                  style={
                    errors.password
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required!!",
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
                        "Password must contain at least one NUMBER, one CAPITAL Letter, one lowercase letter, and one special character",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex right-2 items-center px-4 py-1 text-2xl text-white rounded-r-md bg-secondary"
                >
                  {showPassword ? <BiShow /> : <BiSolidHide />}
                </button>
              </div>
              <div className="text-red-500">{errors.password?.message}</div>
            </div>
            <div className="m-5">
              <div className="flex relative justify-center">
                <input
                  className="w-48 h-10 text-white rounded-xl border border-red-100 cursor-pointer font-inter bg-secondary hover:shadow-sm hover:bg-orange-400"
                  type="submit"
                  value="Register"
                />{" "}
                {isLoading && (
                  <LoadingCircleSvg style={"absolute top-[30%] right-[30%]"} />
                )}
              </div>
            </div>
          </form>
          <div className="w-full z-40 h-[1px] bg-slate-300" />
          <div className="relative z-50">
            <div className="absolute -top-3 right-2/4 w-12 text-sm text-center bg-white translate-x-2/4 text-slate-400">
              OR
            </div>
          </div>
          <div className="m-5">
            <Link
              href={"/login"}
              className="flex justify-center items-center w-48 h-10 rounded-xl border border-orange-300 text-secondary font-inter hover:shadow-2xl"
            >
              Let's login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
