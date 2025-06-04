import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[350px] relative overflow-hidden mt-[100px] lg:mt-[200px]">
        <h2 className="text-4xl lg:text-6xl mb-10 text-white text-center relative">
          My Skills
          <div className="absolute bg-dark_yellow h-[4px] w-[15%] md:w-[10%] rounded-lg left-[50%] -translate-x-[50%] lg:h-[5px]"></div>
        </h2>
        <p className="text-center text-lg italic">
          "Programs must be written for people to read, and only incidentally
          for machines to execute." — Harold Abelson
        </p>
        <div className="absolute pt-6 left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
