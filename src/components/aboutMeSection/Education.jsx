import React from "react";
import { Timeline } from "../ui/timeline";

function Education() {
  const data = [
    {
      title: "Nov 2022 – Present",
      content: (
        <div>
          <p className="mb-2 text-md font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
            <strong>G.L Bajaj Institute of Technology and Management</strong>
          </p>
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-400">
            Bachelor of Technology (B.Tech) in Information Technology
            <br />
            CGPA: 7.57 (Till Date)
          </p>
        </div>
      ),
    },
    {
      title: "April 2021",
      content: (
        <div>
          <p className="mb-2 text-md font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
            <strong>Little Flower Sr. Sec. School</strong>
          </p>
          <p className="mb-4 text-sm font-normal text-neutral-700 md:text-lg dark:text-neutral-400">
            Intermediate (10+2) with PCM
            <br />
            Percentage: 77.4%
          </p>
        </div>
      ),
    },
    {
      title: "April 2019",
      content: (
        <div>
          <p className="mb-2 text-md font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
            <strong>Little Flower Sr. Sec. School</strong>
          </p>
          <p className="mb-4 text-sm font-normal text-neutral-700 md:text-lg dark:text-neutral-400">
            High School (10th)
            <br />
            Percentage: 84.6%
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default Education;
