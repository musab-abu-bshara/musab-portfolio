import React, { Suspense, lazy } from "react";

// Lazy load all 3D canvas components
const EarthCanvas = lazy(() => import("./Earth"));
const StarsCanvas = lazy(() => import("./Stars"));
const ComputersCanvas = lazy(() => import("./Computers"));
const BallCanvas = lazy(() => import("./Ball"));

// Simple loading fallback for canvas components - transparent to avoid white flash
const CanvasFallback = () => null;

// Wrapper components with Suspense and loading fallback
export const LazyEarthCanvas = (props) => (
  <Suspense fallback={<CanvasFallback />}>
    <EarthCanvas {...props} />
  </Suspense>
);

export const LazyStarsCanvas = (props) => (
  <Suspense fallback={<CanvasFallback />}>
    <StarsCanvas {...props} />
  </Suspense>
);

export const LazyComputersCanvas = (props) => (
  <Suspense fallback={<CanvasFallback />}>
    <ComputersCanvas {...props} />
  </Suspense>
);

export const LazyBallCanvas = (props) => (
  <Suspense fallback={<CanvasFallback />}>
    <BallCanvas {...props} />
  </Suspense>
);
