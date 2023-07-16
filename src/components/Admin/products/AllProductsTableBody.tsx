import UpdateStatusDropdown from "@/components/dropdown/UpdateStatusDropdown";
import EditDocSvg from "@/components/svg/EditDocSvg";
import LoadingCircleSvg from "@/components/svg/loading/LoadingCircleSvg";
import { useDeleteUserProfileMutation } from "@/redux/users/deleteUserWithId";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const AllProductsTableBody = ({
  dataMaped,
  idx,
  refetch,
}: {
  dataMaped: any; //SingleProductResponseTypes;
  idx: number;
  refetch: any;
}) => {
  const [deleteUserProfile, { isLoading }] = useDeleteUserProfileMutation();
  const handleDelete = async (id: number) => {
    if (isLoading || !id) {
      return;
    }
    try {
      const result: any = await deleteUserProfile({ id });
      if (result?.data?.message) {
        toast.success(`${result?.data?.message}`);
      }
    } catch (err: any) {
      console.log(err);
      if (err) {
        toast.error(`${err?.data?.errMsg}`);
      }
    }
  };
  const handleUpdate = () => {};

  return (
    <tbody key={dataMaped?.id} className="bg-white divide-y font-font-4">
      <tr className="text-gray-700 bg-gray-50 hover:bg-gray-100">
        <td className="sticky left-0 z-10 px-4 py-3 text-sm bg-gray-50">
          <div className="cursor-pointer hover:font-font-2">{idx + 1}</div>
        </td>
        <td className="px-4 py-3">
          <div className="flex items-center text-sm">
            <div className="block relative mr-3 w-8 h-8 rounded-full">
              <Image
                width={200}
                height={200}
                className="object-cover w-full h-full"
                src={
                  dataMaped?.images[0] ||
                  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
                alt={dataMaped?.name}
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.name}</td>

        {/* <td className="px-4 py-3 w-24 text-sm">{dataMaped?.description}</td> */}
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.companyId}</td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.modal}</td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.kmDriven}</td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.color}</td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.ownerShip}</td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.price}</td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.userId}</td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.boughtYear}</td>
        <td className="px-4 py-3 w-24 text-sm">
          {dataMaped?.isVerifiedByGarage}
        </td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.isNegotiable}</td>
        <td className="px-4 py-3 w-24 text-sm">{dataMaped?.isDeleteByUser}</td>
        <UpdateStatusDropdown dataMaped={dataMaped} />
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
              onClick={() => handleDelete(dataMaped?.id)}
            >
              {/* <ArchiveSvg /> */}
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};
