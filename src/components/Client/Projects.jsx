import { Link } from "react-router-dom";

import Label from "./Label";
import Project from "./Project";
const Projects = ({ data }) => {
  return (
    <div className="mt-[100px]" id="projects">
      <Label number={"2"} title={"Some Projects I Have Built"} />
      <div>
        {data?.map((project, index) => (
          <Project data={project} key={index} />
        ))}
      </div>
      <Link to={"/projects"} className="block w-full flex justify-center items-center mt-5 ">
        <button className="border p-2 rounded-md text-primary border-primary hover:bg-primaryOpc1 hover:ease-in-out hover:duration-100">
          See More
        </button>
      </Link>
    </div>
  );
};

export default Projects;
