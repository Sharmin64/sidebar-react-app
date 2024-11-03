import { IoSearch } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdLightMode, MdOutlineNotificationAdd } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const SideNav = () => {
  return (
    <>
      <div className="flex flex-1 justify-between m-4">
        <div className="text-2xl">
          <IoSearch className="h-11" />
        </div>
        <div className="text-2xl flex flex-row gap-3">
          <div>
            <LiaFlagUsaSolid />
          </div>
          <div>
            <MdLightMode />
          </div>
          <div>
            <MdOutlineNotificationAdd />
          </div>
          <div>
            <RxAvatar />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
