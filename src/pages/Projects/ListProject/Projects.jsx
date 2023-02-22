import { Link } from "react-router-dom";
import { GithubIcon, HostIcon } from "~/assets/Icon";
const Projects = ({ data }) => {
  return (
    <div>
      <table className="border-transparent w-full mt-5">
        <thead>
          <th className="text-textWhite text-md font-semibold">Year</th>
          <th className="text-textWhite text-md font-semibold">Title</th>
          <th className="text-textWhite text-md font-semibold">Made at</th>
          <th className="text-textWhite text-md font-semibold">Built with</th>
          <th className="text-textWhite text-md font-semibold">Link</th>
        </thead>
        <tbody>
          {data?.map((project, index) => (
            <Link
              to={`/project/${project.id}`}
              key={index}
              className="table-row hover:bg-bgLighter rounded-xl w-full"
            >
              <th className="text-primary py-10 px-2">{project.year}</th>
              <th className="text-textWhiter py-10 px-2">{project.name}</th>
              <th className="text-textWhiter py-10 px-2">{project.made}</th>
              <th className="py-10 px-2">
                {project.techs.map((tech, index) => (
                  <span className="text-textWhiter" key={index}>
                    {tech},{" "}
                  </span>
                ))}
              </th>
              <th className="flex justify-around py-10 px-2">
                <a className="block w-1/2" href={project.github}>
                  <GithubIcon
                    classname={"max-w-[2rem] max-h-[2rem] text-textWhite"}
                  />
                </a>
                <a className="block w-1/2" href={project.host}>
                  <HostIcon
                    classname={"max-w-[2rem] max-h-[2rem] text-textWhite"}
                  />
                </a>
              </th>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
