import React from "react";
import Portal from "../Portal/Portal";

const Modal = ({ children, onClose }) => {
  return (
    <Portal>
      <div className="bg-[rgba(0,0,0,0.1)] min-w-full min-h-screen fixed overflow-y-hidden top-0 left-0">
        <div className="bg-white rounded-lg w-[200px] h-auto aspect-square relative top-1/2 left-1/2 -translate-x-1/2 ">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-sm rounded-full w-5 h-5 bg-gray-200 text-gray-500 flex justify-center items-center"
          >
            x
          </button>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
