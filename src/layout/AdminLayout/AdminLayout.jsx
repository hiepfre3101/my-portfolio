import React from "react";
import { Link } from "react-router-dom";
const AdminLayout = ({ children }) => {
  return (
    <div className="w-full p-20">
     <div className="mt-20"> {children}</div>
    </div>
  );
};

export default AdminLayout;
