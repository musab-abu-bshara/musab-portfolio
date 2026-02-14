import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20`}
      style={{
        background: "rgba(20, 20, 35, 0.7)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(145, 94, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            مصعب أبوبشارة &nbsp;
            <span className="sm:block hidden"> | مهندس حاسوب</span>
          </p>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[18px] font-medium cursor-pointer transition-all duration-300`}
              style={{
                color: active === nav.title ? "white" : "#d8d8d8",
                background:
                  active === nav.title
                    ? "linear-gradient(135deg, #915EFF, #bf61ff)"
                    : "transparent",
                padding: "8px 16px",
                borderRadius: "6px",
              }}
              onClick={() => setActive(nav.title)}
              onMouseEnter={(e) => {
                if (active !== nav.title) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.color = "white";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== nav.title) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#d8d8d8";
                }
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={toggle ? "Close menu" : "Open menu"}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            role="button"
            tabIndex={0}
            aria-label={
              toggle ? "Close navigation menu" : "Open navigation menu"
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setToggle(!toggle);
              }
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-3 absolute top-16 right-4 sm:right-6 mx-0 my-2 min-w-[160px] w-[200px] sm:w-[240px] z-10 rounded-2xl transform transition-all duration-300 ease-in-out`}
            style={{
              background:
                "linear-gradient(135deg, rgba(20,20,35,0.92), rgba(29,20,46,0.85))",
              backdropFilter: "blur(18px) saturate(180%)",
              WebkitBackdropFilter: "blur(18px) saturate(180%)",
              border: "1px solid rgba(145, 94, 255, 0.16)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            <ul className="list-none flex flex-col justify-start items-stretch gap-3">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] px-3 py-2 rounded-md transition-colors duration-200 ${
                    active === nav.title
                      ? "bg-white/10 text-white"
                      : "text-secondary hover:bg-white/5"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
