import { FC } from "react";
import { Link } from "react-router-dom";

type sidebarItemType = {
  id: string;
  to: string;
  name: string;
  icon: JSX.Element;
  active: number;
  onClick: (event) => void;
  key: string;
};

const SidebarItem: FC<sidebarItemType> = (props) => {
  return (
    <Link
      id={props.id}
      onClick={props.onClick}
      to={props.to}
      className={
        "flex items-center p-2 hover:bg-gray-700 hover:text-white rounded-md text-gray-300 " +
        (props.active == +props.id && "bg-gray-900")
      }
    >
      {props.icon}
      {props.name}
    </Link>
  );
};
export default SidebarItem;
