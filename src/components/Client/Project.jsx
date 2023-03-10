import React from "react";
import { GithubIcon, HostIcon } from "../../assets/Icon";
import { Link } from "react-router-dom";
const Project = ({ data }) => {
  return (
    <div className="w-full flex justify-start mt-[100px]">
      <a
        href={data.host}
        className="w-1/2 max-h-[400px] overflow-hidden rounded-md bg-green-300"
        target={"_blank"}
      >
        <img src={data.img} alt="" className="rounded-md " />
      </a>
      <div className="w-1/2 flex items-end flex-col pl-6 pt-[80px] absolute right-20">
        <p className="text-primary tracking-widest text-sm">Feature Project</p>
        <Link
          to={`/project/${data.id}`}
          className="text-[1.5rem] cursor-pointer text-textWhiter font-semibold hover:text-primary"
        >
          {data.name}
        </Link>
        <div className="w-full bg-bgLighter rounded-md  p-5 mt-5 max-h-[280px] overflow-auto">
          <p className="text-textWhite">{data.desc}</p>
        </div>
        <div className="mt-5 flex justify-end items-center w-full gap-10">
          {data?.techs.map((tech, index) => (
            <p key={index} className="text-textWhite text-sm tracking-widest">
              {tech}
            </p>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-end w-full gap-5">
          <a target={"_blank"} href={data.github}>
            {" "}
            <GithubIcon
              classname={
                "w-[20px] h-[20px] text-textWhiter hover:text-primary duration-300"
              }
            />
          </a>
          <a target={"_blank"} href={data.host}>
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
