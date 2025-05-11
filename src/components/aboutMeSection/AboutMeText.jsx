import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import SingleContactSocial from "../contactMeSection/SingleContactSocial";
const AboutMeText = () => {
  return (
    <div className="flex flex-col text-md max-w-[90%] md:items-start sm:items-center md:text-left sm:text-center">
      <p className="text-justify">
        I am <b>Umar Khursheed</b>, a passionate and skilled full stack web
        developer with expertise in <b>React.js</b>, <b>TailwindCSS</b>,{" "}
        <b>Redux Toolkit</b>, and <b>Appwrite</b>. I have a solid foundation in
        <b>JavaScript</b>, <b>Python</b>, and <b>C++</b>, and have built dynamic
        applications including
        <b>Enlighten</b> — a feature-rich blog app with secure authentication,
        rich text editing, and intuitive UI/UX.
        <br />I am proficient in <b>Data Structures and Algorithms</b> with 400+
        problems solved on
        <b>LeetCode</b> and a <b>4-star rating on HackerRank</b>.
        <br />
        As a{" "}
        <b>Development Team Member of Google Developers Group (GDG) GLBITM</b>,
        I actively contribute to the developer community and recently organized
        a workshop on building full-stack AI-integrated applications.
        <br />I am constantly seeking to enhance user experience through
        thoughtful <b>UI/UX design</b>
        and efficient <b>state management</b>. I also enjoy writing{" "}
        <b>poetry and blogs</b> in my free time.
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
