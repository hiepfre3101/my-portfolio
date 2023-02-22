import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";

const Header = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const navRef = useRef();
  useEffect(() => {
    function handleScroll() {
      const pos = window.pageYOffset || document.documentElement.scrollTop;
      if (pos > lastScroll) {
        navRef.current.classList.add("-top-[100px]");
        navRef.current.classList.remove("top-0", "shadow-md", "shadow-black");
      } else {
        navRef.current.classList.add("top-0", "shadow-md", "shadow-black");
        navRef.current.classList.remove("-top-[100px]");
      }
      pos === 0 && navRef.current.classList.remove("shadow-md", "shadow-black");
      setLastScroll(pos);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleScroll = (id) => {
    const elem = document.querySelector(id);
    elem && elem.scrollIntoView();
  };
  return (
    <nav
      ref={navRef}
      className={`duration-300 z-20 pb-5 px-4 w-full left-0 flex items-center justify-between pt-5 fixed top-0 bg-backGround`}
    >
      <Link
        to="/"
        className="hover:bg-primaryOpc1 p-6 w-[70px] h-[70px] border-2 rounded-full border-primary flex justify-center items-center"
      >
        <span className="text-primary ">Hyep</span>
      </Link>
      <ul className="  w-[40%]  flex items-center justify-between">
        {navLinks.map((route, index) => {
          return (
            <Link
              key={index}
              className="text-sm text-textWhite hover:text-hightLightPink duration-300"
              to={`/#${route.to}`}
              onClick={() => handleScroll(`#${route.to}`)}
            >
              <span className="text-hightLightPink text-sm">
                {index + 1}.{"  "}
              </span>
              {route.label}
            </Link>
          );
        })}
        <button className="block border p-2 rounded-md text-primary border-primary hover:bg-primaryOpc1 hover:ease-in-out hover:duration-100">
          <span className="text-sm">EN</span>
        </button>
      </ul>
    </nav>
  );
};

export default Header;
