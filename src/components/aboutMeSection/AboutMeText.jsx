import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import SingleContactSocial from "../contactMeSection/SingleContactSocial";
import { LinkPreview } from "../ui/link-preview";
const AboutMeText = () => {
  return (
    <div className="flex flex-col text-md max-w-[90%] md:items-start sm:items-center md:text-left sm:text-center">
      <p className="text-justify">
        I am <b>Umar Khursheed</b>, a passionate full-stack web developer with
        expertise in <b>MERN</b> stack. With a strong background in{" "}
        <b>JavaScript</b>, <b>Python</b>, and <b>C++</b>, I love building
        scalable web applications that combine clean architecture with intuitive{" "}
        <b>UI/UX design</b>.
        <br />I have worked on impactful projects like <b>API Buddy</b>, an
        AI-powered API testing platform, and <b>Enlighten</b>, a feature-rich
        blogging app with secure authentication and seamless state management.
        <br />
        Beyond projects, I actively contribute to <b>open-source</b> through
        programs like <b>GirlScript Summer of Code</b> and{" "}
        <b>Social Summer of Code</b>, where I have improved UI/UX, fixed
        critical issues, and collaborated with developers worldwide. Recognized
        with a <b>Champion Badge</b> in GSSoC, I continue to grow through
        community-driven development.
        <br />I am also proficient in <b>Data Structures and Algorithms</b>,
        with <b>400+ problems solved on LeetCode</b> and a{" "}
        <b>4-star rating on HackerRank</b>, which reflects my strong
        problem-solving mindset.
        <br />
        My goal is to craft applications that not only solve real-world problems
        but also deliver delightful user experiences. Outside of coding, I enjoy
        writing <b>poetry and blogs</b>, blending creativity with technology.
      </p>

      <div className="flex gap-4 mt-5">
        <LinkPreview
          // url="https://www.linkedin.com/in/umar-khursheed"
          imageSrc="/images/Linkedin-2.png"
          isStatic={true}
          height={325}
          width={300}
        >
          <SingleContactSocial
            link="https://www.linkedin.com/in/umar-khursheed-6a811b22a/"
            Icon={FaLinkedinIn}
            bgColor="bg-[#0A66C2]"
            fill="#fff"
          />
        </LinkPreview>
        <LinkPreview url="https://github.com/umarsayed12">
          <SingleContactSocial
            link="https://github.com/umarsayed12/"
            Icon={FiGithub}
            bgColor="bg-[#000]"
            fill="#fff"
          />
        </LinkPreview>
        <LinkPreview
          imageSrc="/images/blog.png"
          isStatic={true}
          height={300}
          width={300}
        >
          <SingleContactSocial
            link="https://umarkhursheed.hashnode.dev/"
            Icon={FaHashnode}
            bgColor="bg-[#fff]"
            fill="#2962FF"
          />
        </LinkPreview>
        <LinkPreview url="https://leetcode.com/u/umar_khursheed/">
          <SingleContactSocial
            link="https://leetcode.com/u/umar_khursheed/"
            Icon={SiLeetcode}
            bgColor="bg-[#000]"
            fill="#FF8C00"
          />
        </LinkPreview>
        <LinkPreview imageSrc="/images/insta.png" isStatic={true}>
          <SingleContactSocial
            link="https://www.instagram.com/umarkhursheed2511/"
            Icon={FaInstagram}
            bgColor="bg-gradient-to-r from-[#833ab4] via-[#c13584] via-[#e1306c] via-[#fd1d1d] via-[#f77737] to-[#fcb045]"
            fill="#fff"
          />
        </LinkPreview>
      </div>
      <div className="shadow-whiteShadow absolute top-[5%] left-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default AboutMeText;
