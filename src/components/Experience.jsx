import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  // Odd index (0, 2, 4...) = right side, Even index (1, 3, 5...) = left side
  const isOdd = index % 2 === 0;
  
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      // contentStyle={isOdd ? {
      //   background: "#1d1836",
      //   color: "#fff",
      // } : {
      //   background: "#1d1836",
      //   color: "#fff",
      //   float: "left",
      // }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      // contentArrowStyle={isOdd ? { borderRight: "7px solid #232631" } : {
      //   borderRight: "7px solid #232631",
      //   transform: "rotate(180deg) translateX(calc(-441px))",
      // }}
      date={experience.date}
      dateClassName={isOdd ? "date-right" : "date-left"}
      position={isOdd ? "right" : "left"}


      iconStyle={{ background: experience.iconBg, borderRadius: "50%" }}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full p-1">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      }
    >
      <div >
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc mr-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pr-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          ما قمت به حتى الآن
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          التعليم والخبرة
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
