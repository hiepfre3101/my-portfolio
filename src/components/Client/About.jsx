import Label from "../../components/Client/Label";

const techs = ["Javascript (ES6+)", "ReactJs", "Tailwindcss"];
const About = () => {
  return (
    <div className="mt-[100px]" id="about">
      <Label number="1" title="About Me" />
      <div className="flex justify-between ">
        <p className="text-textWhite w-1/2 mt-10 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          tempora sit aut perferendis repudiandae quam quidem sapiente veritatis
          qui rem possimus earum totam dolore quaerat, eum non temporibus
          delectus corporis.
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
        </p>
      </div>
    </div>
  );
};

export default About;
