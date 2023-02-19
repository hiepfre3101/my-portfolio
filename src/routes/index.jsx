import AdminProjects from "~/components/admin/AdminProjects";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import AddProject from "~/components/admin/AddProject";
import EditProject from "~/components/admin/EditProject";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
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
