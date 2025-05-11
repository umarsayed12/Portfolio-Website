import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Education from "./Education";
import { Link } from "react-scroll";
const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <h2 className="text-4xl relative lg:text-6xl text-white mb-10 text-center">
        About Me
        <div className="absolute bg-dark_yellow h-[4px] w-[50%] rounded-lg left-[50%] -translate-x-[50%] lg:h-[5px]"></div>
      </h2>

      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="flex flex-col lg:gap-5 gap-14"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-20">
          <AboutMeImage />
          <AboutMeText />
        </div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Education />
        </motion.div>
        <button className="border border-white bg-gradient-to-r  from-dark_yellow to-light_yellow rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-light_yellow hover:scale-110 transition-all duration-500 cursor-pointer md:self-center sm:self-center">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-dark_blue transition-all duration-500"
          >
            My Projects
          </Link>
        </button>
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
