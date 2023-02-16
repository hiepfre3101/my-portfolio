import { getProjects } from "~/api/projects";
import React from "react";
import { useState, useEffect } from "react";

import Label from "./Label";
import Project from "./Project";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getProjects();
        setProjects(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="mt-[100px]" id="projects">
      <Label number={"2"} title={"Some Projects I have built"} />
      <div>
        {projects.map((project, index) => (
          <Project data={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
