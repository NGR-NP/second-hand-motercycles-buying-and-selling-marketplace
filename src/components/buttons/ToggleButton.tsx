import { useEffect, useState } from "react";
import Tooltip from "../Tooltip";
import { useUpdateStatusMutation } from "@/redux/update/UpdateUserStatusApiSlice";
import LoadingCircleSvg from "../svg/loading/LoadingCircleSvg";

const ToggleButton = ({
  path,
  setData,
  data,
  type,
  update,
  toggle,
  id,
}: any) => {
  const [isChecked, setIsChecked] = useState(toggle);
  const [updateStatus, { isLoading }] = useUpdateStatusMutation();
  const handleToggle = () => {
    if (!isLoading) {
      setIsChecked(!isChecked);
      handleUpdate();
    }
  };
  const handleUpdate = async () => {
    try {
      const result = await updateStatus({
        path,
        dataId: id,
        status: `${update}=${!toggle}`,
      }).unwrap();
      console.log("updated result ✅", result);
      if (update === "important") {
        const newStatus = { ...data, important: result.important };
        setData(newStatus);
      } else if (update === "isActive") {
        const newStatus = { ...data, isActive: result.isActive };
        setData(newStatus);
      } else if (update === "status") {
        console.log("called status ");
        const newStatus = { ...data, status: result.status };
        setData(newStatus);
      }
    } catch (err) {
      console.log("updated err ❌", err);
    }
  };

  useEffect(() => {
    setIsChecked(toggle);
  }, [toggle]);

  const original = toggle;
  return (
    <Tooltip text={toggle}>
      <div
        title={isChecked !== original ? "Changed" : "original"}
        className={` ${
          isLoading ? "cursor-wait" : "cursor-pointer"
        } relative  inline-block w-11 mr-2  align-middle select-none transition duration-200 ease-in`}
      >
        {isLoading && (
          <LoadingCircleSvg
            style={`absolute block ${
              isChecked ? "top-1 -right-2" : "-left-1 top-1"
            }`}
          />
        )}

        <input
          type="checkbox"
          name={id}
          id={id}
          className={`${
            isChecked
              ? "translate-x-full"
              : isChecked !== original
              ? "bg-red-400"
              : "translate-x-0"
          } toggle-checkbox absolute block w-6 h-6 rounded-full transform  bg-white border-4 appearance-none cursor-pointer`}
          checked={isChecked}
          onChange={handleToggle}
        />
        <label
          // htmlFor={id}
          className={`${
            isChecked !== original
              ? "bg-red-300"
              : isChecked
              ? "bg-green-300"
              : "bg-gray-300"
          }  toggle-label block overflow-hidden h-6 rounded-full cursor-pointer`}
        ></label>
      </div>
    </Tooltip>
  );
};

export default ToggleButton;
