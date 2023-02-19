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
    <div>
      <Link className="p-3 bg-primary rounded-sm" to={"/admin/add-project"}>
        Add project
      </Link>
      <table className="mt-20">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Github</th>
          <th>Host</th>
          <th>Action</th>
        </thead>
        <tbody>
          {data?.map((project, index) => (
            <tr key={index}>
              <th>{project.id}</th>
              <th>{project.name}</th>
              <th>{project.desc}</th>
              <th>{project.img}</th>
              <th>{project.github}</th>
              <th>{project.host}</th>
              <th className="flex items-end h-full">
                <Link to={`/admin/edit-project/${project.id}`}>
                  <button className="rounded-sm bg-blue-300 p-3">Edit</button>
                </Link>
                <button
                  className="rounded-sm bg-red-300 p-3"
                  onClick={() => handleCheckDelete(project.id)}
                >
                  Remove
                </button>
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
