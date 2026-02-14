import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import LazyImage from "./LazyImage";
import TiltWrapper from "./TiltWrapper";

const ServiceCard = ({ index, title, icon }) => (
  <TiltWrapper
    className="xs:w-[250px] w-full"
    options={{ max: 45, scale: 1, speed: 450 }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <LazyImage
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
          width={64}
          height={64}
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </TiltWrapper>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>مقدمة</p>
        <h2 className={styles.sectionHeadText}>نظرة عامة</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        أنا مصعب أبوبشارة، مهندس حاسوب أعمل على تطوير مواقع ويب احترافية
        وتطبيقات سطح مكتب ذكية تجمع بين الأداء العالي والتصميم العصري. أتقن
        العمل مع تقنيات مثل React و Node.js و Tauri و Rust. أطبق ما تعلمته في
        مشاريع عملية واقعية وأعمل بشكل وثيق مع العملاء لإنشاء حلول فعالة وقابلة
        للتوسع وسهلة الاستخدام. لنعمل معاً لتحويل أفكارك إلى واقع!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-start sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
