import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { Timeline } from "./ui/Timeline";
import logo from "../public/welance_logo.jpg";
import ExperienceCardItem from "./ui/ExperienceCardItem";

const Experience = () => {
  return (
    <section id="experience">
      <div className="px-5 md:px-20 py-20 ">
        <h1 className="heading text-white">
          My <span className="text-purple">Work Experience</span>
        </h1>
        <Timeline
          data={[
            {
              title: "Nov 2021 - May 2022",
              content: <ExperienceCardItem data={workExperience[0]} />,
            },
            {
              title: "May 2022 - Mar 2023",
              content: <ExperienceCardItem data={workExperience[1]} />,
            },
            {
              title: "Mar 2023 - Present",
              content: <ExperienceCardItem data={workExperience[2]} />,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
