import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/umar-khursheed-6a811b22a/"
        Icon={FaLinkedinIn}
        bgColor="bg-[#0A66C2]"
        fill="#fff"
      />
      <SingleContactSocial
        link="https://github.com/umarsayed12/"
        Icon={FiGithub}
        bgColor="bg-[#000]"
        fill="#fff"
      />
      <SingleContactSocial
        link="https://www.instagram.com/umarkhursheed2511/"
        Icon={FaInstagram}
        bgColor="bg-gradient-to-r from-[#833ab4] via-[#c13584] via-[#e1306c] via-[#fd1d1d] via-[#f77737] to-[#fcb045]"
        fill="#fff"
      />
    </div>
  );
};

export default ContactSocial;
