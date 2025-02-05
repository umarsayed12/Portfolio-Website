import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiCircle } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="../../public/images/Umar-2.png"
        alt="Umar Khursheed"
        className="min-h-[300px] lg:min-h-[450px] max-h-[300px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse duration-[30s] ">
        <PiCircle className=" md:h-[90%] sm:h-[100%] min-h-[450px] lg:min-h-[600px] lg:mt-10 w-auto text-light_blue blur-md mt-6" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
