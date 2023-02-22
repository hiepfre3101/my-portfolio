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
const editProject = (product) => {
  return request.put(`/projects/${product.id}`, product);
};

const getProjectsFilter = (idCate) => {
  return request.get(`/categories/${idCate}?_embed=projects`);
};
const getCategories = () => {
  return request.get(`/categories`);
};
export {
  getProjects,
  getProject,
  addProject,
  deleteProject,
  editProject,
  getProjectsFilter,
  getCategories,
};
