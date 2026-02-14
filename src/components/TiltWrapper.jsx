import React, { useRef, useEffect } from "react";

/**
 * Modern Tilt component that doesn't use deprecated findDOMNode
 * Replaces react-tilt with pure CSS and JS implementation
 */
const TiltWrapper = ({ children, className, options = {} }) => {
  const tiltRef = useRef(null);
  const {
    max = 25,
    speed = 400,
    scale = 1.05,
    glare = false,
    maxGlare = 0.5,
  } = options;

  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    let updateBind = null;
    let resetBind = null;

    const update = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      const rotateY = percentX * max;
      const rotateX = -percentY * max;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    };

    const reset = () => {
      element.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    updateBind = update.bind(null);
    resetBind = reset.bind(null);

    element.addEventListener("mousemove", updateBind);
    element.addEventListener("mouseleave", resetBind);

    // Set transition
    element.style.transition = `transform ${speed}ms ease-out`;

    return () => {
      if (element) {
        element.removeEventListener("mousemove", updateBind);
        element.removeEventListener("mouseleave", resetBind);
      }
    };
  }, [max, speed, scale]);

  return (
    <div
      ref={tiltRef}
      className={className}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default TiltWrapper;
