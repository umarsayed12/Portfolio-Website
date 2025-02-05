import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { motion } from "framer-motion";
const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      onClick={setToggleMenu}
      className="relative w-10 h-10 flex flex-col justify-center items-center gap-1 z-50"
    >
      <motion.div
        className="bg-white w-8 h-1 rounded"
        animate={{
          rotate: menuOpen ? 45 : 0,
          y: menuOpen ? 8 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-white w-8 h-1 rounded"
        animate={{
          opacity: menuOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="bg-white w-8 h-1 rounded"
        animate={{
          rotate: menuOpen ? -45 : 0,
          y: menuOpen ? -8 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  );
};

export default NavbarToggler;
