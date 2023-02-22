import React from "react";
import Sidebar from "./Sidebar";
const AdminLayout = ({ children }) => {
  return (
    <div className="w-full pb-10">
       <Sidebar/>
     <div className="w-[80%]  absolute right-0 top-0 pt-10  overflow-auto"> {children}</div>
    </div>
  );
};

export default AdminLayout;
