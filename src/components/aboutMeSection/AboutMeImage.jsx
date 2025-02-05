const AboutMeImage = () => {
  return (
    <div className="h-[400px] w-[300px]">
      <div className="h-[300px] lg:w-[300px] rounded-[100px] overflow-hidden">
        <img
          src="/images/about-me-png.png"
          alt="About Me Image"
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;
