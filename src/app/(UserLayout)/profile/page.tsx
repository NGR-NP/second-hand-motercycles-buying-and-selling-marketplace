'use client'
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/app/ReduxHooks";
import UpdateUserProfileForm from "@/sections/Forms/UpdateUserProfileForm";
import { useCurrentUserDetailsQuery } from "@/redux/auth/GetCurrentUserDetails";
import UserProfileCard from "@/sections/cards/UserProfileCard";
const UserProfileSection = () => {
  let id = 1;
  const dispatch = useAppDispatch();
  const { data, isFetching, isError, error, refetch } =
    useCurrentUserDetailsQuery({ id });
  // console.log("data", data)
  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  });
  return (
    <section className="p-6 mx-auto w-full max-w-screen-xl">
      <div className="flex flex-wrap gap-4 -mx-3 max-lg:flex-col-reverse">
        <div className="flex-1 px-3 w-full shrink-0 md:flex-0">
          <UpdateUserProfileForm data={data?.user} refetch={refetch} />
        </div>
        <div className="flex-1 pr-9 w-full max-w-full max-lg:pr-0 shrink-0 lg:w-4/12 md:flex-0">
          <div className="flex justify-center items-center">
            <UserProfileCard data={data?.user} loading={isFetching} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfileSection;
