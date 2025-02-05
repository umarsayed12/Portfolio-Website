import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo
        text="umarkhursheed979@gmail.com"
        href="mailto:umarkhursheed979@gmail.com"
        Image={HiOutlineMail}
      />
      <SingleInfo
        text="+91 8318660335"
        href="tel:+918318660335"
        Image={FiPhone}
      />
      <SingleInfo text="Greater Noida, U.P" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
