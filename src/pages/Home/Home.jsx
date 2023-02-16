import { Hero, About, Projects, Contact } from "../../components/Client";

function Home() {
  return (
    <div className="pt-20 min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
