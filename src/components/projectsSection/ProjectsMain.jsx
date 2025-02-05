import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { GoArrowUpRight } from "react-icons/go";
import services from "../../appwrite/database";
import { useEffect, useState } from "react";

const ProjectsMain = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    services.getAllProjects().then((project) => {
      if (project) {
        setProjects(project.documents);
      }
    });
  }, []);
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-24 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.project_name}
              desc={project.project_desc}
              github={project.github_link}
              align={project.align}
              image={project.featuredImage}
              link={project.live_link}
            />
          );
        })}
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        <button className="border border-white bg-gradient-to-r  from-dark_yellow to-light_yellow rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-light_yellow hover:scale-110 transition-all duration-500 cursor-pointer md:self-start sm:self-center">
          <a
            href="https://github.com/umarsayed12"
            target="_blank"
            className="flex items-center justify-center cursor-pointer text-dark_blue hover:text-cyan transition-all duration-500"
          >
            Explore Github <GoArrowUpRight />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectsMain;
