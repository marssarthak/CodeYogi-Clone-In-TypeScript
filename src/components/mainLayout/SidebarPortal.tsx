import { FC } from "react";
import SideBar from "./SideBar";
import { MdHighlightOff } from "react-icons/md";
import ReactDOM from "react-dom";

const SidebarPortal = (props: { cancel: () => void }) => {
  return ReactDOM.createPortal(Portal(props), document.querySelector("#modal"));
};

const Portal: FC<{ cancel: () => void }> = (props) => {
  return (
    <div className="bg-gray-600 bg-opacity-75 fixed inset-0">
      <div className="relative">
        <SideBar />
        <MdHighlightOff
          onClick={() => props.cancel()}
          className="absolute left-60 text-white top-1 w-12 h-12"
        />
      </div>
    </div>
  );
};

export default SidebarPortal;
