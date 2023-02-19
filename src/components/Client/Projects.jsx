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
    </div>
  );
};

export default Projects;
