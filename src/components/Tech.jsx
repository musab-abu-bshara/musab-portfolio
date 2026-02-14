import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  View,
  OrbitControls,
  PerspectiveCamera,
  Preload,
} from "@react-three/drei";

import { Ball } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CanvasErrorBoundary from "./canvas/CanvasErrorBoundary";

const Tech = () => {
  const containerRef = useRef(null);

  // Create stable ref objects for each ball's tracking div
  const [trackRefs] = useState(() => technologies.map(() => React.createRef()));

  // Wait for refs to be populated after first DOM render
  const [refsReady, setRefsReady] = useState(false);
  useEffect(() => {
    setRefsReady(true);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Tech Balls Section — DOM tracking targets */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div
            key={technology.name}
            className="flex flex-col items-center gap-3 group"
          >
            {/* Tracking div — View aligns 3D content here */}
            <div
              ref={trackRefs[index]}
              className="w-28 h-28 cursor-grab active:cursor-grabbing"
            />
            <p className="text-white text-[14px] font-medium text-center transition-all duration-300 group-hover:text-[#915EFF] group-hover:scale-110">
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      {/*
        Shared Canvas — ONE WebGL context for ALL 18 tech balls.
        Fixed fullscreen overlay; transparent except where Views render.
        pointerEvents: none so it doesn't block page interaction.
      */}
      <CanvasErrorBoundary>
        <Canvas
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 1,
          }}
          frameloop="always"
          dpr={[1, 2]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false,
          }}
          onCreated={({ gl }) => {
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            gl.setClearColor(0x000000, 0);
          }}
          eventSource={containerRef}
          eventPrefix="client"
        >
          {refsReady &&
            technologies.map(
              (technology, index) =>
                trackRefs[index].current && (
                  <View
                    key={technology.name}
                    track={trackRefs[index]}
                    index={index + 1}
                  >
                    <PerspectiveCamera
                      makeDefault
                      fov={75}
                      position={[0, 0, 5]}
                    />
                    <OrbitControls
                      enableZoom={false}
                      domElement={trackRefs[index].current}
                    />
                    <Suspense fallback={null}>
                      <Ball imgUrl={technology.icon} />
                    </Suspense>
                  </View>
                ),
            )}
          <Preload all />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default SectionWrapper(Tech, "");
