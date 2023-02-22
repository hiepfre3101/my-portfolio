import Label from "../../components/Client/Label";

const techs = ["Javascript (ES6+)", "ReactJs", "Tailwindcss"];
const About = () => {
  return (
    <div className="pt-[100px]" id="about">
      <Label number="1" title="About Me" />
      <div className="flex justify-between ">
        <div className="text-textWhite w-1/2 mt-10 tracking-wide">
          Hello! My name is Hiep. I started learning programming in January
          2022. I love to create things and feel excited every time I learn or
          conquer something new, so I chose to learn{" "}
          <span className="text-primary">Front-end</span>. Along with studying
          in school, I always self-study on Youtube, with{" "}
          <span className="text-primary">a good English background</span>, so I
          can understand general materials. My current goal is to have
          <span className="text-primary"> a job opportunity</span> with major in
          web programming.
          <p className="mt-3">
            Here are a few technologies I have been working with:
          </p>
          <div className="mt-3 grid grid-cols-2 w-full gap-3">
            {techs.map((tech, index) => (
              <p
                className=" flex items-center gap-2 overflow-hidden before:ml-[-5px] before:rotate-45 before:block before:bg-primary before:content-[''] before:w-2 before:h-2"
                key={index}
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
