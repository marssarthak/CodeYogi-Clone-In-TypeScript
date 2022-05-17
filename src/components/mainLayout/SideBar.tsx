import { FC, useState, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import uuid from "react-uuid";
import { MdOutlineQuiz, MdAssignment, MdOutlineLogout } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";

const SideBar: FC = () => {
  const path = location.pathname;
  const sideBarItems = [
    {
      to: "/quiz",
      icon: <MdOutlineQuiz className="h-6 w-6 mr-3" />,
      name: "Quiz",
    },
    {
      to: "/lectures",
      icon: <GiTeacher className="h-6 w-6 mr-3" />,
      name: "Lectures",
    },
    {
      to: "/assignments",
      icon: <MdAssignment className="h-6 w-6 mr-3" />,
      name: "Assignments",
    },
    { to: "/users", icon: <FaUsers className="h-6 w-6 mr-3" />, name: "Users" },
    {
      to: "/profile",
      icon: <CgProfile className="h-6 w-6 mr-3" />,
      name: "Profile",
    },
    {
      to: "/",
      icon: <MdOutlineLogout className="h-6 w-6 mr-3" />,
      name: "Log out",
    },
  ];
  const SidebarTop = sideBarItems.slice(0, 4);
  const SidebarBottom = sideBarItems.slice(4);
  const [whatIsOn, changeOn] = useState(1);

  const handelClick = (event) => {
    changeOn(event.target.id);
  };
  useEffect(() => {
    const index = sideBarItems.findIndex((item) => path == item.to);
    changeOn(index);
  }, [path]);

  return (
    <div className="w-60 bg-gray-800 text-sm font-medium flex flex-col px-2 py-5 h-full space-y-1 fixed z-10 overflow-x-hidden">
      <h1 className="text-white text-3xl font-extrabold mb-4 mx-2">CODEYOGI</h1>
      <div className="grow">
        {SidebarTop.map((item, index) => (
          <SidebarItem
            id={index.toString()}
            to={item.to}
            name={item.name}
            icon={item.icon}
            active={whatIsOn}
            onClick={handelClick}
            key={uuid()}
          />
        ))}
      </div>
      {SidebarBottom.map((item, index) => (
        <SidebarItem
          id={(index + 4).toString()}
          to={item.to}
          name={item.name}
          icon={item.icon}
          active={whatIsOn}
          onClick={handelClick}
          key={uuid()}
        />
      ))}
    </div>
  );
};

export default SideBar;
