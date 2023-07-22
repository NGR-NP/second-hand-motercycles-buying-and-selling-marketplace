"use client";
import AppLogo from "@/components/logo/AppLogo";
import { useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { BiSolidHide, BiShow } from "react-icons/bi";
import { setCredentials } from "@/redux/auth/authSlice";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/auth/authApiSlice";
import { useAppDispatch } from "@/redux/app/ReduxHooks";
import LoadingCircleSvg from "@/components/svg/loading/LoadingCircleSvg";
import OtpVerifyDialog from "./OtpVerifyDialog";
import Link from "next/link";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const verifyOTPRef = useRef<HTMLDialogElement>(null);
  const closeDialog = () => {
    verifyOTPRef?.current?.close();
  };
  const dispatch = useAppDispatch();

  const [login, { isLoading, isSuccess, isError, error, status }]: any =
    useLoginMutation();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginType>();
  console.log(error);
  console.log("jfjf");
  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    console.log("first");
    if (isLoading) return;
    const { email, password } = data;
    try {
      const res = await login({ email, password }).unwrap();
      const { message } = res;
      if (message === "email is not verifyed, please check your inbox!!") {
        sessionStorage.setItem("verifyOtp", res?.data?.token);
        verifyOTPRef.current?.showModal();
      } else if (status === 200) {
        dispatch(setCredentials(res.data));
      } else {
        toast.error("unhandle response");
        console.log(res);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data?.message);
    }
  };

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
              <div>Email Address</div>
              <div className={`flex ${errors.email && "animate-shake"}`}>
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
                      message: "email is required!!",
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
            <div className="flex w-[95%] mx-auto flex-col m-4 space-y-2">
              <div>Password</div>
              <div className={`flex ${errors.password && "animate-shake"}`}>
                <input
                  className="p-2 pr-9 w-full rounded-l-md rounded-tl-md border outline-none bg-slate-100"
                  type={show ? "text" : "password"}
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
                    // minLength: {
                    //   value: 8,
                    //   message: "At least 8 characters required",
                    // },
                    // maxLength: {
                    //   value: 50,
                    //   message: "more then 50 characters only allowed!!",
                    // },
                    // pattern:
                    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,50}$/i,
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="flex right-2 items-center px-4 py-1 text-2xl text-white rounded-r-md bg-secondary"
                >
                  {show ? <BiShow /> : <BiSolidHide />}
                </button>
              </div>
              <div className="text-red-500">{errors.password?.message}</div>
              <div className="text-sm text-end cursor-pointer font-raleway text-[#1E2772] underline">
                Forgot Password?
              </div>
            </div>
            <div className="m-5">
              <div className="flex relative justify-center">
                <input
                  className="w-48 h-10 text-white rounded-xl border border-red-100 cursor-pointer font-inter bg-secondary hover:shadow-sm hover:bg-orange-400"
                  type="submit"
                  value="login now"
                />{" "}
                {isLoading && (
                  <LoadingCircleSvg style={"absolute top-[30%]  right-[30%]"} />
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
              href={"/register"}
              className="flex justify-center items-center w-48 h-10 rounded-xl border border-orange-300 text-secondary font-inter hover:shadow-2xl"
            >
              Let's Register
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
  );
};

export default LoginPage;
