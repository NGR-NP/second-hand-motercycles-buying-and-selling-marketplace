import { logout, selectCurrentRole } from "@/redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/app/ReduxHooks";
import Link from "next/link";
import VerifiedBadgedSvg from "@/components/svg/VerifiedBadgeSvg";
import PhoneOut from "@/components/svg/PhoneOutSvg";
import EmailSvg from "@/components/svg/EmailSvg";
import PhoneSvg from "@/components/svg/PhoneSvg";

const UserProfileCard = () => {
  const dispatch = useAppDispatch();
  const role = useAppSelector(selectCurrentRole)
  let loading = false;
  const handleLogout = (e: any) => {
    dispatch(logout());
  };
  
  let id = 1;
  const data = {
    id: 1,
    firstName: "tej",
    lastName: "karki",
    image: "",
    phone: 9383838,
    email: "ejdfja@e.com",
    status: "true",
  };
  console.log(data);
  return (
    <div className="flex relative flex-col mx-2 w-96 min-w-0 break-words bg-clip-border rounded-2xl border-0 shadow-xl bg-slate-50">
      <div className="relative mb-16">
        <img
          className="object-cover w-full h-40 rounded-t-2xl"
          src="/images/reaction/shock.jpeg"
          alt="profile cover image"
        />

        <div className="flex absolute -bottom-10 left-1/2 flex-wrap justify-center -mx-3 transform -translate-x-1/2">
          <div className="px-3 max-w-full flex-0">
            <div className="relative w-24">
              <Link href="#">
                <img
                  className="object-cover z-10 w-24 h-24 rounded-full border-2 border-white border-solid"
                  src={data?.image || "/images/reaction/shock.jpeg"}
                  alt="profile image"
                />
              </Link>
              {data?.status === "true" && (
                <div className="absolute bottom-0 right-2 text-white bg-green-500 rounded-full">
                  <VerifiedBadgedSvg />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {role === "admin" && (
        <div className="border-black/12.5  rounded-t-2xl p-6 text-center pt-0 pb-6 lg:pt-2 lg:pb-4">
          <div className="flex justify-between">
            <a
              href={`tel:${data?.phone}`}
              className={`${
                loading ? "cursor-wait" : "cursor-pointer"
              } block px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle bg-green-500 rounded-lg border-0 shadow-md transition-all ease-in  hover:text-white tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85`}
            >
              <PhoneOut />
            </a>

            <a
              href={`mail:${data?.email}`}
              className={`${
                loading ? "cursor-wait" : "cursor-pointer"
              } block px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle rounded-lg border-0 shadow-md transition-all ease-in  hover:text-white bg-slate-700 tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85`}
            >
              <EmailSvg />
            </a>
          </div>
        </div>
      )}
      <div className="flex-auto p-6 pt-0 text-slate-700">
        <div className="flex flex-wrap -mx-3">
          <div className="px-3 w-full max-w-full flex-1-0">
            <div className="flex gap-4 justify-center">
              <div className="grid text-center">
                <div className="text-lg font-bold font-font-3">
                  {loading ? (
                    <div className="overflow-hidden mx-auto w-full h-8 rounded-md bg-slate-100">
                      <div className="mx-auto w-full h-8 rounded-md animate-ping bg-slate-200"></div>
                    </div>
                  ) : (
                    2
                  )}
                </div>
                <div className="text-sm leading-normal opacity-80">
                  Listings
                </div>
              </div>
              <div className="grid text-center">
                <div className="text-lg font-bold font-font-3">
                  {loading ? (
                    <div className="overflow-hidden mx-auto w-full h-8 rounded-md bg-slate-100">
                      <div className="mx-auto w-full h-8 rounded-md animate-ping bg-slate-200"></div>
                    </div>
                  ) : (
                    10
                  )}
                </div>
                <div className="text-sm leading-normal opacity-80">
                  purchased
                </div>
              </div>
              <div className="grid text-center">
                <div className="text-lg font-bold font-font-3">
                  {loading ? (
                    <div className="overflow-hidden mx-auto w-full h-8 rounded-md bg-slate-100">
                      <div className="mx-auto w-full h-8 rounded-md animate-ping bg-slate-200"></div>
                    </div>
                  ) : (
                    89
                  )}
                </div>
                <div className="text-sm leading-normal opacity-80">Review</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-slate-800">
          {loading ? (
            <div className="overflow-hidden mx-auto w-28 h-8 rounded-md bg-slate-100">
              <div className="mx-auto w-28 h-8 rounded-md animate-ping bg-slate-200" />
            </div>
          ) : (
            <h5 className="text-2xl font-bold">
              {data?.firstName} {data?.lastName}
            </h5>
          )}
          <div className="flex mt-3 mb-2 text-base font-semibold leading-relaxed text-slate-700">
            <div className="mr-2">
              <EmailSvg />
            </div>
            {loading ? (
              <div className="flex overflow-hidden justify-center w-2/3 h-8 rounded-md bg-slate-100">
                <div className="w-2/3 h-8 animate-ping bg-slate-200" />
              </div>
            ) : (
              data?.email
            )}
          </div>
          <div className="flex mt-6 mb-2 text-base font-semibold leading-relaxed text-slate-700">
            <div className="mr-2">
              <PhoneSvg />
            </div>
            {loading ? (
              <div className="overflow-hidden w-28 h-8 rounded-md bg-slate-100">
                <div className="w-28 h-8 animate-ping bg-slate-200"></div>
              </div>
            ) : (
              data?.phone
            )}
          </div>
        </div>
        {id === data?.id && (
          <div className="flex justify-end px-4 w-full transition-all ease-in-out cursor-pointer active:translate-y-px hover:shadow-xs hover:-translate-y-px active:opacity-85">
            <div
              onClick={handleLogout}
              className="flex items-center px-4 py-2 rounded-lg bg-black3 text-slate-200 hover:bg-black2"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 transition duration-75 text-slate-100 group-hover:text-slate-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="flex-1 ml-3 whitespace-nowrap text-slate-200 group-hover:text-slate-800">
                Logout
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
