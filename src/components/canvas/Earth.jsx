import React, {
  Suspense,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

// Preload with Draco compression support
useGLTF.preload("./planet/scene.gltf", true);

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf", true);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

/**
 * Monitors WebGL context health inside the R3F tree.
 * Listens for context loss/restore events and triggers recovery.
 */
const ContextMonitor = ({ onContextLost, onContextRestored }) => {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;

    const handleLost = (e) => {
      e.preventDefault(); // Allow context restoration
      console.warn("[Earth] WebGL context lost");
      onContextLost?.();
    };

    const handleRestored = () => {
      console.info("[Earth] WebGL context restored");
      onContextRestored?.();
    };

    canvas.addEventListener("webglcontextlost", handleLost);
    canvas.addEventListener("webglcontextrestored", handleRestored);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleLost);
      canvas.removeEventListener("webglcontextrestored", handleRestored);
    };
  }, [gl, onContextLost, onContextRestored]);

  return null;
};

/**
 * Static fallback shown when WebGL context is lost or fails to initialize.
 */
const EarthFallback = ({ onRetry }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-4">
    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 animate-pulse flex items-center justify-center">
      <span className="text-4xl">🌍</span>
    </div>
    {onRetry && (
      <button
        onClick={onRetry}
        className="text-sm text-white/70 hover:text-white underline transition-colors"
      >
        إعادة تحميل النموذج ثلاثي الأبعاد
      </button>
    )}
  </div>
);

const EarthCanvas = () => {
  const [contextKey, setContextKey] = useState(0);
  const [contextLost, setContextLost] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleContextLost = useCallback(() => {
    if (mountedRef.current) setContextLost(true);
  }, []);

  const handleContextRestored = useCallback(() => {
    if (mountedRef.current) {
      setContextLost(false);
      setContextKey((k) => k + 1); // Force remount of canvas
    }
  }, []);

  const handleRetry = useCallback(() => {
    setContextLost(false);
    setContextKey((k) => k + 1);
  }, []);

  if (contextLost) {
    return <EarthFallback onRetry={handleRetry} />;
  }

  return (
    <CanvasErrorBoundary fallback={<EarthFallback onRetry={handleRetry} />}>
      <Canvas
        key={contextKey}
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <ContextMonitor
          onContextLost={handleContextLost}
          onContextRestored={handleContextRestored}
        />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default EarthCanvas;
