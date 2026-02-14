import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({
  src,
  srcAvif = null,
  srcWebp = null,
  alt,
  className = "",
  placeholder = true,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px", threshold: 0.01 }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!loaded && placeholder && (
        <div className="absolute inset-0 bg-tertiary/30 animate-pulse rounded-2xl" />
      )}
      {inView && (
        <picture>
          {/* AVIF - best compression (if provided) */}
          {srcAvif && <source srcSet={srcAvif} type="image/avif" />}

          {/* WebP - good compression and wide support (if provided) */}
          {srcWebp && <source srcSet={srcWebp} type="image/webp" />}

          {/* Original format - fallback */}
          <img
            src={src}
            alt={alt}
            className={`${className} ${
              loaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </picture>
      )}
    </div>
  );
};

export default LazyImage;
