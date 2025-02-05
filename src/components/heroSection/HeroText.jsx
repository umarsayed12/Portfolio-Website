import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TypingEffect from "./TypingEffect";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-4xl sm:text-xl text-white "
      >
        Hello I am
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-6xl lg:text-8xl sm:text-4xl text-dark_yellow font-bold uppercase"
      >
        Umar <br className="sm:hidden md:block" />
        Khursheed
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl md:text-xl text-lg mb-4"
      >
        <p className="flex justify-center md:justify-start items-center gap-1.5">
          <p>A</p> <TypingEffect />
        </p>
      </motion.p>
    </div>
  );
};

export default HeroText;
