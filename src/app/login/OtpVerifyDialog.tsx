import CloseSvg from "@/components/svg/CloseSvg";
import { useVerifyOTPMutation } from "@/redux/auth/authApiSlice";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const OtpVerifyDialog = ({
  verifyOTPRef,
  closeDialog,
  email,
}: {
  verifyOTPRef: any;
  closeDialog: any;
  email: string;
}) => {
  const [verifyOTP, { isLoading, isSuccess, isError, error, status }]:any =
    useVerifyOTPMutation();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<VerifyOtpType>();
  const handleVerifyOTP: SubmitHandler<VerifyOtpType> = async (data) => {
    try {
      const res = await verifyOTP({
        email: email,
        OTP: data.otp,
      });
      console.log(res);
    } catch (err) {
      console.log(error?.data.msg)
    }
  };
  return (
    <dialog
      ref={verifyOTPRef}
      className="overflow-y-auto overflow-x-hidden top-2/4 left-[55%] -translate-x-2/3"
    >
      <div className="w-full max-w-md max-h-full">
        <div className="rounded-lg shadow">
          <button
            type="button"
            onClick={closeDialog}
            className="absolute top-3 outline-black right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
          >
            <CloseSvg style="w-3 h-3" />
          </button>
          <div className="p-8 rounded-xl">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Verify your email
            </h3>

            <form
              onSubmit={handleSubmit(handleVerifyOTP)}
              className="space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="otp"
                  className="block mb-2 text-sm text-gray-900"
                >
                  Enter the 6-digit code sent to <b>{email}</b>
                </label>
                <input
                  id="otp"
                  {...register("otp", {
                    required: {
                      value: true,
                      message: "enter your 6 digit verification code !!",
                    },
                    minLength: {
                      value: 6,
                      message: "invalid otp, please recheck you email",
                    },
                    maxLength: {
                      value: 6,
                      message: "invalid otp",
                    },
                  })}
                  placeholder="********"
                  className="bg-gray-50 border border-gray-300 appearance-none outline-none text-gray-900 text-sm rounded-lg focus:ring-black1 focus:border-black1 block w-full p-2.5    "
                />
                {errors?.otp && (
                  <div className="text-red-500 pl-[10px] pt-[5px] pr-[1px] pb-0">
                    {errors?.otp?.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black1 hover:bg-black2 focus:ring-4 focus:outline-none focus:ring-black3 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default OtpVerifyDialog;
