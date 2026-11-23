import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { flagshipSaaS } from "../constants";

// Heroicons (outline) paths, keyed by pillar id.
const ICONS = {
  lock: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  sparkles:
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  tenancy:
    "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3",
  sdlc: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  devops:
    "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3",
  quality:
    "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  security:
    "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  ux: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
};

const Icon = ({ name, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.6}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[name]} />
  </svg>
);

const FlagshipSaaS = () => {
  const { badge, title, summary, stats, pillarsTitle, pillars, aiLine, stack } =
    flagshipSaaS;

  return (
    <motion.article
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      aria-labelledby="flagship-title"
      className="mt-12 rounded-[20px] sm:rounded-3xl border border-[#915EFF]/35 bg-tertiary px-5 py-6 sm:p-10 lg:p-12 shadow-[0_30px_80px_-40px_rgba(145,94,255,0.45)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 lg:gap-14">
        {/* Story + numbers */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <span className="self-start inline-flex items-center gap-2 rounded-full border border-[#915EFF]/45 bg-[#915EFF]/[0.12] px-3 py-1 text-[12px] sm:text-[13px] font-semibold text-[#c4a8ff]">
            <Icon name="lock" className="w-[14px] h-[14px]" />
            {badge}
          </span>

          <h3
            id="flagship-title"
            className="text-white font-extrabold text-[24px] sm:text-[32px] lg:text-[36px] leading-[1.4]"
          >
            {title}
          </h3>

          <p className="text-secondary text-[15px] sm:text-[17px] leading-[27px] sm:leading-[30px]">
            {summary}
          </p>

          <dl className="mt-2 sm:mt-4 grid grid-cols-3 border-y lg:border-b-0 border-white/[0.08] py-5 sm:py-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse justify-end gap-1.5 sm:gap-2 px-2.5 sm:px-5 first:pr-0 [&:not(:first-child)]:border-r border-white/[0.08]"
              >
                <dt className="text-secondary text-[12px] sm:text-[14px] leading-snug">
                  <span className="sm:hidden">{stat.labelShort}</span>
                  <span className="hidden sm:inline">{stat.label}</span>
                </dt>
                <dd className="text-white font-extrabold text-[30px] sm:text-[44px] leading-none">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* What I built */}
        <div>
          <p className="text-[12px] sm:text-[13px] font-bold tracking-wide text-[#c4a8ff]">
            {pillarsTitle}
          </p>
          <ul className="mt-1.5">
            {pillars.map((pillar) => (
              <li
                key={pillar.id}
                className="flex items-start gap-3 sm:gap-3.5 py-3 sm:py-3.5 border-b border-white/[0.06]"
              >
                <span className="shrink-0 flex items-center justify-center w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-[10px] bg-[#915EFF]/[0.14] text-[#c4a8ff]">
                  <Icon name={pillar.id} className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-bold text-[15px] sm:text-[16px]">
                    {pillar.title}
                  </span>
                  <span className="text-secondary text-[13px] sm:text-[14px] leading-[1.6]">
                    {pillar.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* AI-native + stack */}
      <div className="mt-6 lg:mt-10 lg:pt-6 lg:border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <p className="flex items-start lg:items-center gap-2.5 rounded-xl lg:rounded-none bg-[#915EFF]/10 lg:bg-transparent p-3 lg:p-0 text-[13px] sm:text-[15px] leading-[1.7] text-[#e8e6f3]">
          <Icon
            name="sparkles"
            className="shrink-0 w-[18px] h-[18px] sm:w-5 sm:h-5 mt-[3px] lg:mt-0 text-[#c4a8ff]"
          />
          {aiLine}
        </p>
        <p
          dir="ltr"
          className="text-center lg:text-left text-[13px] sm:text-[14px] text-secondary tracking-[0.02em] leading-[1.8]"
        >
          {stack.join(" · ")}
        </p>
      </div>
    </motion.article>
  );
};

export default FlagshipSaaS;
