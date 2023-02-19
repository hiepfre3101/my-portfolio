import { Hero, About, Projects, Contact } from "~/components/client";
import { getProjects } from "~/api/projects";
import listContent from "~/Hocs/listContent";
const requestProjects = () => getProjects();
const ListProject = listContent(Projects, requestProjects);
function Home() {
  return (
    <div className="pt-20 min-h-screen">
      <Hero />
      <About />
      <ListProject />
      <Contact />
    </div>
  );
}

export default Home;
