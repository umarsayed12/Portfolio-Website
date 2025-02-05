import SingleSkill from "./SingleSkill";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { skills } from "../../constants/constants";
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
                hoverColor={item.hoverColor}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
