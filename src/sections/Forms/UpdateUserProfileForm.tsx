import React, { useState } from "react";
import EditDocSvg from "../../components/svg/EditDocSvg";
import { useAppDispatch } from "@/redux/app/ReduxHooks";
import LoadingCircleSvg from "@/components/svg/loading/LoadingCircleSvg";

const UpdateUserProfileForm = ({ data, refetch }: any) => {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState(null);

  const handleImgUploadChage = (e: any) => {
    setImg(e.target.files[0]);
  };
  const isLoading = false;
  const handleSubmit = (e:any) => {
    
  };
  return (
    <div className="flex relative flex-col min-w-0 break-words bg-clip-border bg-white rounded-2xl border-0 shadow-xl">
      <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
        <div className="flex items-center">
          <p className="mb-0 text-slate-700">User Profile</p>
          <div
            onClick={handleSubmit}
            className="flex gap-2 items-center px-4 py-2 mb-4 ml-auto text-xs font-bold leading-normal text-center text-white align-middle rounded-lg border-0 shadow-md transition-all ease-in cursor-pointer hover:bg-black2 bg-black3 tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:translate-y-px active:opacity-85"
          >
            {isLoading ? <LoadingCircleSvg /> : <EditDocSvg />}
            Edit Profile
          </div>
        </div>
      </div>
      <div className="flex-auto p-6">
        <p className="text-sm leading-normal uppercase">User Information</p>
        <div className="flex flex-wrap -mx-3">
          <div className="mx-auto text-center">
            <div
              title="upload Profile Picture"
              className="flex justify-start m-auto w-full duration-200 ease-in max-lg:flex-wrap"
            >
              <div className="relative m-auto">
                <div className="relative">
                  <img
                    className="w-[30vmin] h-[30vmin] object-cover rounded-full"
                    src={
                      img
                        ? URL.createObjectURL(img)
                        : data?.image
                        ? data?.image
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                  />
                </div>
                {!img && (
                  <div className="absolute top-1 right-1 bottom-1 left-1">
                    <div className="flex justify-center items-center m-auto w-full h-full text-sm text-center">
                      <label
                        htmlFor="file"
                        className="text-center flex justify-center  items-center w-[28vmin] h-[28vmin] bg-slate-500/20 rounded-full text-slate-900 px-4 py-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[5vmin] h-[5vmin] text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                          />
                        </svg>
                      </label>
                      <input
                        type="file"
                        id="file"
                        onChange={handleImgUploadChage}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>Profile Picture</div>
          </div>

          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Current Password
              </label>
              <input
                type="password"
                name="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                placeholder="*************"
              />
            </div>
          </div>
          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                htmlFor="ChangePassword"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Change Password
              </label>
              <input
                type="password"
                name="ChangePassword"
                value={changePassword}
                autoComplete="flase"
                onChange={(e) => setChangePassword(e.target.value)}
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                placeholder="*************"
              />
            </div>
          </div>
        </div>
        <hr className="mx-0 my-4 h-px bg-transparent bg-gradient-to-r from-transparent to-transparent border-0 opacity-25 via-black/40" />
      </div>
    </div>
  );
};

export default UpdateUserProfileForm;
