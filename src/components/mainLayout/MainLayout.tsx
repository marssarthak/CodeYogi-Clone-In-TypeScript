import { FC, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { MdList } from "react-icons/md";
import SidebarPortal from "./SidebarPortal";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const MainLayout: FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex relative items-stretch h-full">
      <IoArrowBackCircleOutline
        className="absolute z-30 right-4 sm:right-16 top-16 h-8 w-8 text-gray-400 "
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className="hidden sm:block relative">
        <SideBar />
      </div>
      {showSidebar && <SidebarPortal cancel={() => setShowSidebar(false)} />}
      <MdList
        onClick={() => setShowSidebar(true)}
        className="sm:hidden w-8 h-8 absolute top-2 left-2 "
      />
      <div className="px-4 sm:px-12 pt-16 pb-4 bg-gray-100 min-h-screen h-full grow sm:ml-60 ">
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
