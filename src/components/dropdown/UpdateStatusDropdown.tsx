import React, { useCallback, useEffect, useState } from "react";
import LoadingCircleSvg from "../svg/loading/LoadingCircleSvg";
import { useUpdateStatusMutation } from "@/redux/update/UpdateUserStatusApiSlice";
import { toast } from "react-toastify";

const UpdateStatusDropdown = ({ dataMaped }: any) => {
  const [data, setData] = useState({ status: undefined });
  const [updatedStatus, setUpdatedStatus] = useState(data?.status);
  const [updateStatus, { isLoading }] = useUpdateStatusMutation({});
  const handleStatusUpdate = (e: any) => {
    setUpdatedStatus(e.target.value);
    updateAdsStatus(e.target.value);
  };
  const updateAdsStatus = async (status: any) => {
    if (data?.status === status) {
      return;
    }
    try {
      const result = await updateStatus({
        path: "ads-status",
        dataId: dataMaped?.id,
        status: `status=${status}`,
      }).unwrap();
      const newStatus = { ...data, status: result?.status };
      setData(newStatus);
      setUpdatedStatus(result?.status);
      toast.success(`status updated as ${result.status}}`);
    } catch (err: any) {
      setUpdatedStatus(dataMaped?.status);
      console.log("ads Status err ", err);
      if (!err) {
        toast.error("server is not responding");
      }
      toast.error(`${err?.data?.errMsg}`);
    }
  };
  const updateState = useCallback(() => {
    if (dataMaped) {
      setData(dataMaped);
      setUpdatedStatus(dataMaped.status);
    }
  }, [dataMaped]);

  useEffect(() => {
    updateState();
  }, []);
  return (
    <td className="relative px-4 py-3 space-y-2 text-xs">
      {isLoading && (
        <LoadingCircleSvg style="absolute top-[45%] right-[0.4rem]" />
      )}
      <select
        onChange={handleStatusUpdate}
        value={data?.status}
        className={`py-2 outline-none px-2 font-semibold leading-tight  ${
          updatedStatus == "PENDING"
            ? "text-yellow-700 bg-yellow-100"
            : updatedStatus == "APPROVED"
            ? "text-green-700 bg-green-100"
            : "text-red-700 bg-red-100"
        } rounded-lg pl-4  cursor-pointer`}
      >
        <option disabled>{data?.status}</option>
        <option value="APPROVED">APPROVED</option>
        <option value="PENDING">PENDING</option>
        <option value="REJECTED">REJECT</option>
      </select>
    </td>
  );
};

export default UpdateStatusDropdown;
