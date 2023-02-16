import React from "react";
import { GithubIcon, IgIcon, LinkInIcon } from "../../assets/Icon";

const Sidebar = () => {
  return (
    <div
      className="w-[50px] h-full fixed bottom-0  text-textWhite flex flex-col items-center justify-end 
     after:content-[''] after:w-[0.02px] after:h-40 after:bg-textWhite "
    >
      <a
        href=""
        className="hover:text-hightLightPink hover:translate-y-[-4px] duration-300"
      >
        <GithubIcon classname={"w-6 h-6"} />
      </a>
      <a
        href=""
        className="hover:text-hightLightPink hover:translate-y-[-4px] duration-300"
      >
        <IgIcon classname={"w-6 h-6 mt-3 "} />
      </a>
      <a
        href=""
        className="hover:text-hightLightPink hover:translate-y-[-4px] duration-300"
      >
        <LinkInIcon classname={"w-6 h-6 mt-3 mb-3"} />
      </a>
    </div>
  );
};

export default Sidebar;
