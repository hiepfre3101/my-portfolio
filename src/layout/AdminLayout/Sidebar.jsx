import { Link } from "react-router-dom";
import { getAdminNav } from "~/api/nav";
import listContent from "~/Hocs/listContent";

const Sidebar = ({ data }) => {
  return (
    <div className="w-[20%] fixed top-0 left-0  py-3 bg-backGround min-h-screen text-white">
       <Link to="/" className="underline px-3">{"<- Home"}</Link>
      <h1 className="text-[2rem] px-3">Admin</h1>
      <ul className="flex flex-col items-start">
        {data.map((nav) => (
          <Link to={nav.path} key={nav.id} className="py-3 px-3 hover:bg-bgLighter w-full">
            {nav.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};
const requestNavs = () => getAdminNav();
export default listContent(Sidebar, requestNavs);
