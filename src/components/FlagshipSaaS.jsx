import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { flagshipSaaS } from "../constants";

const LockIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const FlagshipSaaS = () => {
  const { badge, title, summary, stats, highlights, stack, note } =
    flagshipSaaS;

  return (
    <motion.article
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className="mt-12 relative rounded-2xl p-[1px] bg-gradient-to-br from-[#915EFF] via-[#915EFF]/30 to-transparent"
      aria-labelledby="flagship-title"
    >
      <div className="rounded-2xl bg-tertiary p-6 sm:p-10">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#915EFF]/15 border border-[#915EFF]/40 px-3 py-1 text-[#c4a8ff] text-xs font-semibold">
            <LockIcon className="w-4 h-4" />
            {badge}
          </span>
        </div>

        <h3
          id="flagship-title"
          className="mt-4 text-white font-bold text-[24px] sm:text-[30px] leading-snug"
        >
          {title}
        </h3>
        <p className="mt-3 text-secondary text-[16px] sm:text-[17px] leading-[30px] max-w-3xl">
          {summary}
        </p>

        {/* Stats */}
        <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-black/30 border border-white/5 px-4 py-3"
            >
              <dt className="text-secondary text-xs">{stat.label}</dt>
              <dd className="mt-1 text-white font-bold text-[18px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Highlights */}
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <li
              key={item.title}
              className={`rounded-xl bg-black/20 border border-[#915EFF]/15 p-4 ${
                highlights.length % 2 === 1 && i === highlights.length - 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <p className="text-white font-semibold text-[16px]">
                {item.title}
              </p>
              <p className="mt-1.5 text-secondary text-[14px] leading-[24px]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="mt-8 flex flex-wrap gap-2" dir="ltr">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-[#915EFF]/20 to-[#915EFF]/5 border border-[#915EFF]/20 text-white text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-6 text-secondary/80 text-[13px]">{note}</p>
      </div>
    </motion.article>
  );
};

export default FlagshipSaaS;
