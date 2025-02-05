import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const ContactMeLeft = () => {
  return (
    <motion.div
      variants={fadeIn("right", `0.2`)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col gap-8 w-full"
    >
      <ContactText />
      <ContactForm />
    </motion.div>
  );
};

export default ContactMeLeft;
