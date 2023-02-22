import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-backGround w-full ">
      <Header />
      <Sidebar />
      <div className="w-[85%] relative left-[10%]">{children}</div>
    </div>
  );
};

export default DefaultLayout;
  