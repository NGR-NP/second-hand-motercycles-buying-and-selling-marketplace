import EditDocSvg from "@/components/svg/EditDocSvg";
import LoadingCircleSvg from "@/components/svg/loading/LoadingCircleSvg";
import { useDeleteUserProfileMutation } from "@/redux/users/deleteUserWithId";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const AllUsersTableBody = ({ dataMaped, idx, refetch }: any) => {
  const [data, setData] = useState<UserInfo>();
  const [deleteUserProfile, { isLoading }] = useDeleteUserProfileMutation();
  const handleDelete = async (id: number) => {
    if (isLoading || !id) {
      return;
    }
    try {
      const result = await deleteUserProfile({ id });
      if (result?.data?.message) {
        toast.success(`${result?.data?.message}`);
      }
    } catch (err) {
      console.log(err);
      if (err) {
        toast.error(`${err?.data?.errMsg}`);
      }
    }
  };
  return (
    <tbody key={data?.id} className="bg-white divide-y font-font-4">
      <tr className="text-gray-700 bg-gray-50 hover:bg-gray-100">
        <td className="sticky left-0 z-10 px-4 py-3 text-sm bg-gray-50">
          <div className="cursor-pointer hover:font-font-2">{idx + 1}</div>
        </td>
        <td className="px-4 py-3">
          <div className="flex items-center text-sm">
            <div className="block relative mr-3 w-8 h-8 rounded-full">
              <img
                className="object-cover w-full h-full"
                src={
                  data?.image ||
                  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
                alt={data?.firstName}
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 w-24 text-sm">{data?.firstName}</td>
        <td className="px-4 py-3 w-24 text-sm">{data?.lastName}</td>
        <td className="px-4 py-3 w-24 text-sm">{data?.email}</td>
        <td className="px-4 py-3 w-24 text-sm">{data?.phone}</td>
        <td className="px-4 py-3 w-24 text-sm">{data?.role}</td>
        <td className="px-4 py-3 text-sm">
          <button
            className="flex gap-2 px-3 py-2 text-lg bg-blue-600 rounded-lg text-slate-50"
            onClick={handleUpdate}
          >
            <EditDocSvg /> Update
          </button>
        </td>
        <td className="px-4 py-3 text-sm">
          {isLoading ? (
            <LoadingCircleSvg />
          ) : (
            <button
              className="flex gap-2 px-3 py-2 text-lg text-red-600 rounded-lg"
              onClick={() => handleDelete(data?._id)}
            >
              {/* <ArchiveSvg /> */}
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};
