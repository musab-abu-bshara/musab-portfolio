import React from "react";
import { motion } from "framer-motion";
import TiltWrapper from "./TiltWrapper";

const FloatingTechIcons = () => {
  // Animation variants for different diagonal directions
  const floatVariants = {
    topRight: {
      x: [0, 20, 0],
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    topLeft: {
      x: [0, -20, 0],
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    bottomRight: {
      x: [0, 20, 0],
      y: [0, 20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    bottomLeft: {
      x: [0, -20, 0],
      y: [0, 20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // const shadowPulse = {
  //   opacity: [0.3, 0.8, 0.3],
  //   transition: {
  //     duration: 2,
  //     repeat: Infinity,
  //     ease: "easeInOut",
  //   },
  // };

  // Glow animation synchronized with icon float
  // const glowAnimation = {
  //   opacity: [0, 0.5, 0.5, 0],
  //   transition: {
  //     duration: 2,
  //     repeat: Infinity,
  //     ease: "easeInOut",
  //     times: [0, 0.3, 0.7, 1],
  //   },
  // };

  return (
    <div className="relative flex justify-center items-center">
      <div className="relative flex justify-center items-center w-[280px] h-[240px] sm:w-[340px] sm:h-[280px] lg:w-[420px] lg:h-[320px]">
        {/* Avatar with gradient border and glow */}
        <TiltWrapper
          className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] rounded-full"
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          {/* Synchronized Glow Effect BENEATH Avatar */}
          {/* <motion.div
            animate={glowAnimation}
            className="absolute rounded-full"
            style={{
              top: "-20px",
              left: "-20px",
              width: "calc(100% + 40px)",
              height: "calc(100% + 40px)",
              background: "linear-gradient(135deg, #915EFF, #bf61ff)",
              filter: "blur(20px)",
            }}
          /> */}

          {/* Inner gradient border */}
          <div
            className="avatar absolute -top-1.5 -left-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] rounded-full"
            style={{
              background: "linear-gradient(135deg, #915EFF, #bf61ff)",
              zIndex: 0,
            }}
          />

          {/* Avatar image */}
          <img
            src="/musab.jpg"
            alt="مصعب أبوبشارة"
            className="relative w-full h-full rounded-full object-cover z-10"
          />
        </TiltWrapper>

        {/* Top Right Icons */}
        <motion.div
          animate={floatVariants.topRight}
          className="absolute flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-white text-xl sm:text-2xl lg:text-3xl z-1"
          style={{
            background: "linear-gradient(135deg, #915EFF, #bf61ff)",
            top: "8%",
            right: "6%",
          }}
        >
          <i className="devicon-html5-plain" />
        </motion.div>

        <motion.div
          animate={floatVariants.topRight}
          className="absolute flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-white text-xl sm:text-2xl lg:text-3xl z-1"
          style={{
            background: "linear-gradient(135deg, #915EFF, #bf61ff)",
            top: "28%",
            right: "0%",
          }}
        >
          <i className="devicon-css3-plain" />
        </motion.div>

        {/* Bottom Right Icons */}
        <motion.div
          animate={floatVariants.bottomRight}
          className="absolute flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-white text-xl sm:text-2xl lg:text-3xl z-1"
          style={{
            background: "linear-gradient(135deg, #915EFF, #bf61ff)",
            top: "52%",
            right: "0%",
          }}
        >
          <i className="devicon-javascript-plain" />
        </motion.div>

        <motion.div
          animate={floatVariants.bottomRight}
          className="absolute flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-white text-xl sm:text-2xl lg:text-3xl z-1"
          style={{
            background: "linear-gradient(135deg, #915EFF, #bf61ff)",
            bottom: "8%",
            right: "6%",
          }}
        >
          <i className="devicon-react-original" />
        </motion.div>

        {/* Top Left Icons */}
        <motion.div
          animate={floatVariants.topLeft}
          className="absolute flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-white text-xl sm:text-2xl lg:text-3xl z-1"
          style={{
            background: "linear-gradient(135deg, #915EFF, #bf61ff)",
            top: "8%",
            left: "6%",
          }}
        >
          <i className="devicon-rust-original" />
        </motion.div>

        <motion.div
          animate={floatVariants.topLeft}
          className="absolute flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-white text-xl sm:text-2xl lg:text-3xl z-1"
          style={{
            background: "linear-gradient(135deg, #915EFF, #bf61ff)",
            top: "28%",
            left: "0%",
          }}
        >
          <i className="devicon-tauri-plain" />
        </motion.div>

        {/* Bottom Left Icons */}
        <motion.div
          animate={floatVariants.bottomLeft}
          className="absolute flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-white text-xl sm:text-2xl lg:text-3xl z-1"
          style={{
            background: "linear-gradient(135deg, #915EFF, #bf61ff)",
            top: "52%",
            left: "0%",
          }}
        >
          <i className="devicon-nodejs-plain-wordmark" />
        </motion.div>

        <motion.div
          animate={floatVariants.bottomLeft}
          className="absolute flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-white text-xl sm:text-2xl lg:text-3xl z-1"
          style={{
            background: "linear-gradient(135deg, #915EFF, #bf61ff)",
            bottom: "8%",
            left: "6%",
          }}
        >
          <i className="devicon-nestjs-original" />
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingTechIcons;
