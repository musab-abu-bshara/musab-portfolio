import React from "react";
import { footerData } from "../constants";

const Footer = () => {
  return (
    <footer
      className="relative py-12 px-4 border-t backdrop-blur-sm"
      style={{
        background: "rgba(20, 20, 35, 0.85)",
        borderTop: "1px solid rgba(145, 94, 255, 0.2)",
        boxShadow: "0 -8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 w-full max-w-2xl">
          {/* Logo, Social & Personal Info - All Centered */}
          <div className="flex flex-col items-center">
            {/* Logo & Social Links */}
            <div className="social flex flex-col items-center gap-6 mb-8 w-full">
              {/* Logo (no border-radius) */}
              <img
                src={footerData.logo.src}
                alt={footerData.logo.alt}
                className="logo w-16 h-16 object-contain "
              />

              {/* Social Icons */}
              <div className="info flex gap-4">
                {footerData.social.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-tertiary
                             rounded-lg border border-transparent hover:border-[#915EFF] transition-all duration-300 
                             hover:scale-110 hover:shadow-lg hover:shadow-[rgba(145,94,255,0.3)]"
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-white text-xl`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Personal Information List */}
            <ul className="personal flex flex-col gap-4 w-full">
              {footerData.personal.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-center gap-3 text-gray-300"
                >
                  {/* Icon */}
                  <i
                    className={`${item.icon} text-[#915EFF] text-lg flex-shrink-0`}
                  />

                  {/* Text */}
                  <p
                    className={`text-sm leading-relaxed ${
                      item.isPhone
                        ? "number font-semibold text-white"
                        : "text-gray-300"
                    }`}
                    dir={item.isPhone ? "ltr" : "rtl"}
                  >
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="conclusion pt-6 mt-6 border-t border-gray-700/30 w-full max-w-2xl">
          <p className="text-center text-sm text-gray-400" dir="rtl">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
