import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Blogs",
      section: "https://umarkhursheed.hashnode.dev/",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Umar Khursheed</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return item.name !== "Blogs" ? (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className=" transition-all duration-500 cursor-pointer hover:text-dark_yellow"
                >
                  {item.name}
                </Link>
              </li>
            ) : (
              <li key={index}>
                <a
                  href={item.section}
                  target="_blank"
                  className="hover:text-white transition-all duration-500 cursor-pointer lg:hover:text-dark_yellow"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-center lg:text-right mt-2 mb-12 text-sm">
        © 2025 umarkhursheed979@gmail.com | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
