import AdminProjects from "~/components/admin/AdminProjects";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";

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
];
