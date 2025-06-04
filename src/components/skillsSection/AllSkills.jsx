import React, { useRef, useEffect, useState } from "react";
import SingleSkill from "./SingleSkill";
import { skills } from "../../constants/constants";
import "./AllSkills.css"; // Ensure this is imported

const AllSkills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  return (
    <div
      className="overflow-hidden py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="marquee-wrapper">
        <div
          className={`marquee-inner ${isHovered ? "paused" : ""}`}
          ref={containerRef}
        >
          {[...skills, ...skills, ...skills].map((item, index) => (
            <div key={index} className="marquee-item">
              <SingleSkill
                text={item.skill}
                imgSvg={<item.icon />}
                hoverColor={item.hoverColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
