import { Link } from "react-scroll";
import { toggleMenu } from "../../state/menuSlice";
import { useDispatch } from "react-redux";
import { GoArrowUpRight } from "react-icons/go";
const links = [
  { link: "Home", section: "hero" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();
  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <ul className="flex items-center lg:flex-row sm:flex-col gap-6 text-dark_blue lg:text-white font-body lg:relative sm:absolute sm:top-[110%] text-center lg:left-[50%] left-[80%] -translate-x-[50%] lg:text-md rounded-lg sm:text-xl sm:bg-light_yellow backdrop-blur-lg lg:bg-transparent sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              onClick={setToggleMenu}
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer lg:text-white text-dark_blue hover:text-light_blue lg:hover:text-dark_yellow transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-light_blue lg:bg-dark_yellow w-0 group-hover:w-[80%] h-[3px] rounded-xl transition-all duration-500"></div>
          </li>
        );
      })}
      <li className="group flex items-center">
        <a
          className="cursor-pointer lg:text-white sm:text-dark_blue hover:text-light_blue lg:hover:text-dark_yellow transition-all duration-500"
          href="https://umarkhursheed.hashnode.dev/"
          target="_blank"
        >
          Blogs
        </a>
        <div className="lg:hidden mx-auto w-0 group-hover:block rounded-xl transition-all duration-500">
          <GoArrowUpRight />
        </div>
      </li>
    </ul>
  );
};

export default NavbarLinks;
