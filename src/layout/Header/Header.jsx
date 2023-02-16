import { Link } from "react-router-dom";
import { navLinks } from "../../constants";

const Header = () => {
  return (
    <nav className=" pb-5 w-full flex items-center justify-between pt-5">
      <Link
        href="/"
        className="hover:bg-primaryOpc1 p-6 w-[70px] h-[70px] border-2 rounded-full border-primary flex justify-center items-center"
      >
        <span className="text-primary ">Hyep</span>
      </Link>
      <ul className="  w-[40%]  flex items-center justify-between">
        {navLinks.map((route, index) => {
          return (
            <a
              key={index}
              className="text-sm text-textWhite hover:text-hightLightPink duration-300"
              href={`#${route.to}`}
            >
              <span className="text-hightLightPink text-sm">
                {index + 1}.{"  "}
              </span>
              {route.label}
            </a>
          );
        })}
        <button className="border p-2 rounded-md text-primary border-primary hover:bg-primaryOpc1 hover:ease-in-out hover:duration-100">
          <span className="text-sm">EN</span>
        </button>
      </ul>
    </nav>
  );
};

export default Header;
