const SingleInfo = ({ text, Image, href }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl" />
      <a href={href}>{text}</a>
    </div>
  );
};

export default SingleInfo;
