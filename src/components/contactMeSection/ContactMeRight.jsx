import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const ContactMeRight = () => {
  return (
    <motion.div
      variants={fadeIn("left", `0.2`)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col items-center justify-center gap-12"
    >
      <img src="/images/contact-me.png" alt="email" className="max-w-[300px]" />
      <ContactInfo />
      <ContactSocial />
    </motion.div>
  );
};

export default ContactMeRight;
