import { useState, useEffect } from "react";
import { deleteProject } from "~/api/projects";
import Loading from "~/components/Loading";

const listContent = (WrapComp, request) => {
  function AfterCallApi() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      (async () => {
        try {
          const data = await request();
          setLoading(true);
          setProjects(data.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
    const handleDeleteProject = (id) => {
      (async () => {
        try {
          await deleteProject(id);
          const newList = projects.filter((project) => project.id !== id);
          setProjects(newList);
        } catch (error) {
          console.log(error);
        }
      })();
    };
    if (!loading) return <Loading />;
    return <WrapComp data={projects} onDelete={handleDeleteProject} />;
  }
  return AfterCallApi;
};

export default listContent;
