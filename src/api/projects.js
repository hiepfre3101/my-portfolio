import request from "./config";

const getProjects = () => {
  return request.get("/projects");
};
const getProject = (id) => {
  return request.get(`/projects/${id}`);
};
const addProject = (project) => {
  return request.post(`/projects`, project);
};
const deleteProject = (id) => {
  return request.delete(`/projects/${id}`);
};
const updateProject = (product) => {
  return request.put(`/projects/${product.id}`, product);
};

export { getProjects, getProject, addProject, deleteProject, updateProject };
