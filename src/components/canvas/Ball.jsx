import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

/**
 * Ball mesh — the 3D icosahedron with a decal texture.
 * Used inside a shared <Canvas> via <View>, NOT as a standalone canvas.
 */
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

/**
 * Full scene for a single ball inside a <View>.
 * Contains lights, controls, and the Ball mesh.
 */
const BallScene = ({ icon }) => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
    </>
  );
};

/**
 * Legacy standalone canvas — kept for backward compat but no longer used by Tech.
 */
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: true,
        failIfMajorPerformanceCaveat: false,
        alpha: true,
      }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export { Ball, BallScene };
export default BallCanvas;
