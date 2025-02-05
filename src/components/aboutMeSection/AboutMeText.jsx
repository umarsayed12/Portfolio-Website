import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import SingleContactSocial from "../contactMeSection/SingleContactSocial";
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <p>
        I am <b>Umar Khursheed</b>, a passionate and skilled frontend developer
        with expertise in <b>ReactJS</b>, <b>TailwindCSS</b>, and{" "}
        <b>Appwrite</b>. With a strong foundation in <b>JavaScript</b>,{" "}
        <b>Python</b>, and
        <b> C++</b>, I have built dynamic and user-friendly applications,
        including a <b>Blog App</b> and a <b>Real-Time Weather App</b>.<br />I
        am proficient in <b>Data Structures and Algorithms</b>, and I actively
        solve coding challenges on platforms like{" "}
        <b>Leetcode (300+ Problems)</b> and
        <b> HackerRank (4-star in Problem Solving)</b>.<br />
        As a Development Team Member of{" "}
        <b>Google Developers Group (GDG) GLBITM</b>, I thrive in collaborative
        environments and continuously seek opportunities to enhance user
        experiences through intuitive <b>UI/UX design</b> and efficient{" "}
        <b>state management</b>.<br /> I also write poetry and blogs sometimes.
      </p>
      <div className="flex gap-4 mt-5">
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
          link="https://umarkhursheed.hashnode.dev/"
          Icon={FaHashnode}
          bgColor="bg-[#fff]"
          fill="#2962FF"
        />
        <SingleContactSocial
          link="https://leetcode.com/u/umar_khursheed/"
          Icon={SiLeetcode}
          bgColor="bg-[#000]"
          fill="#FF8C00"
        />
        <SingleContactSocial
          link="https://www.instagram.com/umarkhursheed2511/"
          Icon={FaInstagram}
          bgColor="bg-gradient-to-r from-[#833ab4] via-[#c13584] via-[#e1306c] via-[#fd1d1d] via-[#f77737] to-[#fcb045]"
          fill="#fff"
        />
      </div>
      <div className="shadow-whiteShadow absolute top-[5%] left-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default AboutMeText;
