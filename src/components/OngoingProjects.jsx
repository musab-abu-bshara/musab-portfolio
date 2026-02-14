import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { ongoingProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import LazyImage from "./LazyImage";
import TiltWrapper from "./TiltWrapper";

const OngoingProjectCard = ({ project, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <TiltWrapper
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative overflow-hidden group"
      >
        {/* Lock Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-10 pointer-events-none backdrop-blur-[2px]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Lock Icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-[#915EFF] drop-shadow-[0_0_10px_rgba(145,94,255,0.6)]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>

              {/* Glowing effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#915EFF]/20 rounded-full blur-xl"
              />
            </motion.div>
          </div>

          {/* "In Progress" Badge */}
          <div className="absolute top-4 right-4 bg-[#915EFF]/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <p className="text-white text-xs font-semibold tracking-wider">
              قيد العمل
            </p>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-[230px]">
          <LazyImage
            src={project.image}
            srcAvif={project.imageAvif}
            srcWebp={project.imageWebp}
            alt={`project-${project.id}`}
            className="w-full h-full object-cover rounded-2xl filter blur-[3px] brightness-75"
          />
        </div>

        {/* Project Info */}
        <div className="mt-5 relative z-20">
          {/* Type Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#915EFF]/30">
              {project.type === "web app" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#915EFF]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#915EFF]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              )}
              <p className="text-[#915EFF] text-sm font-medium">
                {project.type === "web app"
                  ? "موقع الكتروني"
                  : "تطبيق سطح مكتب"}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.div
                key={`${project.id}-${tech}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                className="px-3 py-1.5 bg-gradient-to-br from-[#915EFF]/20 to-[#915EFF]/5 backdrop-blur-sm rounded-lg border border-[#915EFF]/20"
              >
                <p className="text-white text-sm font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>

          {/* Secret indicator dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4 opacity-50">
            <div className="w-1.5 h-1.5 rounded-full bg-[#915EFF]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#915EFF]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#915EFF]"></div>
          </div>
        </div>
      </TiltWrapper>
    </motion.div>
  );
};

const OngoingProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>ما أعمل عليه الآن</p>
        <h2 className={`${styles.sectionHeadText}`}>المشاريع الحالية</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          هذه مجموعة من المشاريع التي أعمل عليها حالياً. تغطي هذه المشاريع
          مجالات متنوعة من تطوير الويب إلى تطبيقات سطح المكتب، باستخدام أحدث
          التقنيات والأدوات. تابعوا معي لمشاهدة تقدم هذه المشاريع قريباً.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {ongoingProjects.map((project, index) => (
          <OngoingProjectCard
            key={`ongoing-${project.id}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(OngoingProjects, "ongoing");
