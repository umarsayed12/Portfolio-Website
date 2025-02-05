import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useEffect, useState } from "react";
import services from "../../appwrite/database";
import config from "../../config/config";

const SingleProject = ({ name, desc, github, align, image, link }) => {
  const [projectImage, setProjectImage] = useState(null);
  useEffect(() => {
    services.getProjectImage(image).then((url) => {
      if (url) setProjectImage(url);
    });
  }, []);
  return (
    <motion.div
      variants={fadeIn(align, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`flex w-full sm:flex-col-reverse items-start gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
        <p>{desc}</p>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          <a href={github} className="flex text-xl items-center gap-1">
            Github <GoArrowUpRight />
          </a>
        </h2>
        <a
          href={link}
          className={`text-xl flex gap-1 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer md:justify-self-start`}
        >
          Live Link <GoArrowUpRight />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={projectImage} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
