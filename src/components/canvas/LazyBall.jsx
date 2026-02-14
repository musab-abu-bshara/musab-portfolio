import React, { useState, useEffect, useRef } from "react";
import BallCanvas from "./Ball";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

/**
 * LazyBall — legacy wrapper that lazy-loads a standalone BallCanvas.
 * Not used by the current Tech section (which uses a shared Canvas with View).
 * Kept for backward compatibility.
 */
const LazyBall = ({ icon, name, index = 0 }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);
          }, index * 150);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsLoaded(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-28 h-28 relative" title={name}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#915EFF]/30 to-[#915EFF]/10 animate-pulse" />
            {name && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-medium text-white/50 text-center px-2">
                  {name}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {isInView && (
        <div
          className={`w-full h-full transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <CanvasErrorBoundary
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#915EFF]/20 to-[#915EFF]/5 flex items-center justify-center">
                  <img
                    src={icon}
                    alt={name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
            }
          >
            <BallCanvas icon={icon} />
          </CanvasErrorBoundary>
        </div>
      )}
    </div>
  );
};

export default LazyBall;
