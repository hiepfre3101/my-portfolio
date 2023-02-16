import React from "react";
import { GithubIcon, HostIcon } from "../../assets/Icon";
const Project = ({data}) => {
  return (
    <div className="w-full flex justify-start mt-[100px]">
      <div className="w-1/2 h-[400px] bg-green-300"></div>
      <div className="w-1/2 flex items-end flex-col pl-6 pt-[80px]">
        <p className="text-primary tracking-widest text-sm">Feature Project</p>
        <p className="text-[1.5rem] text-textWhiter font-semibold">{data.name}</p>
        <div className="w-full bg-bgLighter rounded-md  p-5 mt-5">
          <p className="text-textWhite">
           {data.desc}
          </p>
        </div>
        <div className="mt-5 flex justify-end items-center w-full gap-10">
          <p className="text-textWhite text-sm tracking-widest">React</p>
          <p className="text-textWhite text-sm tracking-widest">Scss</p>
          <p className="text-textWhite text-sm tracking-widest">Vercel</p>
        </div>
        <div className="mt-3 flex items-center justify-end w-full gap-5">
          <a href={data.github}>
            {" "}
            <GithubIcon
              classname={
                "w-[20px] h-[20px] text-textWhiter hover:text-primary duration-300"
              }
            />
          </a>
          <a href={data.host}>
            {" "}
            <HostIcon
              classname={
                "w-[20px] h-[20px] text-textWhiter hover:text-primary duration-300"
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
