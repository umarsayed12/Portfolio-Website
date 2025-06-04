const SingleSkill = ({ imgSvg, text, hoverColor }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500 cursor-pointer">
      <div className="flex flex-col items-center gap-2 relative">
        <div
          className={`bg-white text-primary_dark h-[100px] w-[100px] flex items-center justify-center rounded-full ${hoverColor} hover:text-white hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-light_blue`}
        >
          {imgSvg}
        </div>
        <p className="text-dark_blue font-bold">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-dark_yellow absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
