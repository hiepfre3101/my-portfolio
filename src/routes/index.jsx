import AdminProjects from "~/components/admin/AdminProjects";
import Home from "../pages/Home/Home";
import ListProject from "~/pages/Projects/ListProject/ListProject";
import AddProject from "~/components/admin/AddProject";
import EditProject from "~/components/admin/EditProject";
import ProjectDetail from "~/pages/Projects/ProjectDetail";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <ListProject />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/admin/projects",
    element: <AdminProjects />,
  },
  {
    path: "/admin/add-project",
    element: <AddProject />,
  },
  {
    path: "/admin/edit-project/:id",
    element: <EditProject />,
  },
];
