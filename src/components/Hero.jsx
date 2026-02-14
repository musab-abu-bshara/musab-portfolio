import { motion } from "framer-motion";

import { styles } from "../styles";
import FloatingTechIcons from "./FloatingTechIcons";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] bottom-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-stretch gap-3 sm:gap-5`}
      >
        {/* Violet Line Element */}
        <div className="flex flex-col justify-start items-center pt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] flex-shrink-0" />
          <div className="w-1 flex-grow violet-gradient" />
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col items-start justify-center flex-grow">
          {/* Text Content Section */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              مرحباً، أنا <span className="text-[#915EFF]">مصعب أبوبشارة</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              حوّل أفكارك إلى حلول رقمية تدعم نجاحك{" "}
              <br className="sm:block hidden" />
              أطور مواقع ويب احترافية وتطبيقات سطح مكتب ذكية
            </p>
          </div>

          {/* Floating Tech Icons - Centered in flex-grow container */}
          <div className="flex-grow w-full flex justify-center items-center">
            <FloatingTechIcons />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll down to About section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
