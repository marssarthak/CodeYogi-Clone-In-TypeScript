import React from "react";
import ReactDOM from "react-dom";
import AssignmentSubmit from ".//AssignmentSubmit";

const Modal = (props: {
  update?: (link: string) => void;
  cancel: () => void;
  id: number;
}) => {
  return ReactDOM.createPortal(
    <AssignmentSubmit {...props} />,
    document.querySelector("#modal")
  );
};

export default Modal;
