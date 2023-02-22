import { useState, useEffect } from "react";
import { getCategories, getProjects, getProjectsFilter } from "~/api/projects";
import Projects from "./Projects";

const ListProject = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [idCate, setIdCate] = useState();
  useEffect(() => {
    (async () => {
      try {
        const data = await getCategories();
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const data = idCate
          ? await getProjectsFilter(idCate)
          : await getProjects();
        idCate ? setProjects(data.data.projects) : setProjects(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idCate]);
  const onHandleClick = (id) => {
    setIdCate(id);
  };
  return (
    <div className="w-full min-h-screen  pt-[200px]">
      <span className="text-textWhiter tracking-wide text-[3rem] font-semibold">
        Projects
      </span>
      <span className="text-primary block tracking-widest">
        A list of things I have worked on
      </span>
      <div className="flex gap-3 mt-3">
        <button
          className="border p-2 rounded-md text-primary border-primary hover:bg-primaryOpc1 hover:ease-in-out hover:duration-300 "
          onClick={() => setIdCate(undefined)}
        >
          All
        </button>
        {categories?.map((cate) => (
          <button
            className="border p-2 rounded-md text-primary border-primary hover:bg-primaryOpc1 hover:ease-in-out hover:duration-300"
            key={cate.id}
            onClick={() => onHandleClick(cate.id)}
          >
            {cate.label}
          </button>
        ))}
      </div>
      <Projects data={projects} />
    </div>
  );
};

export default ListProject;
