import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getProjects } from "~/api/projects";
import listContent from "~/Hocs/listContent";
import Modal from "../Modal/Modal";
const requestProjects = () => getProjects();
const AdminProjects = ({ data, onDelete }) => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState();
  const handleCloseVisible = () => {
    setVisible(false);
  };
  const handleCheckDelete = (id) => {
    setVisible(true);
    setId(id);
  };
  const handleDelete = (id) => {
    setVisible(false);
    onDelete(id);
  };
  return (
    <div className="max-w-[90%] m-auto ">
      <Link className="p-3 bg-primary rounded-sm" to={"/admin/add-project"}>
        Add project
      </Link>
      <table className="mt-20 w-full border-collapse border border-black">
        <thead>
          <th className="border border-black">Id</th>
          <th className="border border-black">Name</th>
          <th className="border border-black">Image</th>
          <th className="border border-black">Github</th>
          <th className="border border-black">Host</th>
          <th className="border border-black">Action</th>
        </thead>
        <tbody>
          {data?.map((project, index) => (
            <tr key={index} className="border border-black">
              <th className="max-h-[200px] max-w-[200px] border border-black">
                {project.id}
              </th>
              <th className="max-h-[200px] max-w-[200px] border border-black">
                {project.name}
              </th>
              <th className="max-h-[200px] max-w-[200px] border border-black flex justify-center items-center">
                <img
                  src={project.img}
                  className="max-w-[200px] max-h-[200px]"
                />
              </th>
              <th className="max-h-[200px] max-w-[200px] border border-black overflow-auto">
                <p className="p-3">{project.github}</p>
              </th>
              <th className="max-h-[200px] max-w-[200px] border border-black overflow-auto">
                <p className="p-3">{project.host}</p>
              </th>
              <th className="h-[200px] max-h-[200px] max-w-[200px] border border-black">
                <div className="flex items-center justify-center">
                  <Link to={`/admin/edit-project/${project.id}`}>
                    <button className="rounded-sm bg-blue-300 p-3">Edit</button>
                  </Link>
                  <button
                    className="rounded-sm bg-red-300 p-3"
                    onClick={() => handleCheckDelete(project.id)}
                  >
                    Remove
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      {visible && (
        <Modal onClose={handleCloseVisible}>
          <div className="pt-10 pl-2">
            <p>Do you want delete this project?</p>
            <div className="flex justify-center gap-3">
              <button
                className="p-3 bg-red-400"
                onClick={() => handleDelete(id)}
              >
                Yes
              </button>
              <button className="p-3 bg-green-400" onClick={handleCloseVisible}>
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default listContent(AdminProjects, requestProjects);
