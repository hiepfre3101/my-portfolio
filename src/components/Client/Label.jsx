import React from "react";

const Label = ({ number = "", title = "" }) => {
  return (
    <div className="w-full flex justify-start items-center  relative top-0 after:content-[''] after:ml-3 after:w-[200px] after:block after:bg-textWhite after:h-[0.3px]">
      <span className="text-primary tracking-wide text-[1.5rem]">0{number}.</span>
      <span className="text-textWhiter tracking-wide text-[2rem] ml-3 font-semibold">{title}</span>
    </div>
  );
};

export default Label;
