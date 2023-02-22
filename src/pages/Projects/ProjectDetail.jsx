import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GithubIcon, HostIcon } from "~/assets/Icon";
import { getProject } from "~/api/projects";
const ProjectDetail = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const data = await getProject(id);
        setProject(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <div className="w-full min-h-screen  pt-[200px] pb-10">
      <span className="text-textWhiter tracking-wide text-[3rem] font-semibold">
        {project.name}
      </span>
      <table className="border-transparent w-full mt-5">
        <thead>
          <th className="text-textWhite text-md font-semibold">Year</th>
          <th className="text-textWhite text-md font-semibold">Title</th>
          <th className="text-textWhite text-md font-semibold">Made at</th>
          <th className="text-textWhite text-md font-semibold">Built with</th>
          <th className="text-textWhite text-md font-semibold">Link</th>
        </thead>
        <tbody>
          <tr className="py-10 px-2 hover:bg-bgLighter rounded-xl">
            <th className="text-primary py-10 px-2">{project.year}</th>
            <th className="text-textWhiter py-10 px-2">{project.name}</th>
            <th className="text-textWhiter py-10 px-2">{project.made}</th>
            <th className="py-10 px-2">
              {project?.techs?.map((tech, index) => (
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
          </tr>
        </tbody>
      </table>
      <p className="text-textWhite text-lg font-semibold">Description</p>
      <div className="flex justify-between w-full">
        <div className="text-textWhiter text-md font-semibold w-1/2">
          {project.desc}
        </div>
        <img src={project.img} className="w-1/2 max-h-[400px] rounded-lg" />
      </div>
    </div>
  );
};

export default ProjectDetail;
