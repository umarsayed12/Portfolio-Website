const SingleContactSocial = ({ Icon, link, bgColor, fill }) => {
  return (
    <div
      className={`text-2xl h-12 w-12 border border-white text-white rounded-full p-3 flex hover:scale-110 transition-all duration-500 items-center justify-center ${bgColor} `}
    >
      <a href={link} className="cursor-pointer" target="_blank">
        <Icon fill={fill} />
      </a>
    </div>
  );
};

export default SingleContactSocial;
