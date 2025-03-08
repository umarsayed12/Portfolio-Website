import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa6";
const NavbarBtn = () => {
  return (
    <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-dark_blue border-cyan border flex items-center gap-1 bg-gradient-to-r  from-dark_yellow to-light_yellow transition-all duration-500 hover:scale-110 hover:border-white cursor-pointer hover:shadow-ButtonShadow">
      <a href="/Resume/My_Resume.pdf" download>
        Resume
      </a>
      <div>
        <FaDownload />
      </div>
    </button>
  );
};

export default NavbarBtn;
