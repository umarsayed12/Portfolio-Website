const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[80px] lg:mt-[200px]">
      <h2 className="text-4xl lg:text-6xl text-white mb-10 relative">
        Projects
        <div className="absolute bg-dark_yellow h-[4px] w-[50%] rounded-lg left-[50%] -translate-x-[50%] lg:h-[5px]"></div>
      </h2>
      <p className="text-lg text-center italic">
        "Ideas are easy. Execution is everything." — John Doerr
      </p>
    </div>
  );
};

export default ProjectsText;
