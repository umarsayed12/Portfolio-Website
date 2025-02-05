import React from "react";

const Education = () => {
  const education = [
    {
      institute: "G.L Bajaj Institute of Technology and Management",
      year: "2022-2026",
      course: "Bachelor of Technology",
    },
    {
      institute: "Little Flower Sr. Sec. School",
      year: "2020-2021",
      course: "Intermediate(10+2)",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">Education</h2>
      <ul className="flex flex-col gap-3">
        {education.map((item, index) => {
          return (
            <li key={index} className="text-white flex flex-col">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <h3>{item.institute}</h3>
                <p className="text-dark_yellow/80">{item.year}</p>
              </div>
              <p className="text-white/50">{item.course}</p>
              {index < education.length - 1 ? (
                <div className="h-[2px] bg-white/30 w-full mt-3"></div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
