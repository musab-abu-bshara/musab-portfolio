import { lazy } from "react";

// Lazy load heavy sections for code splitting
export const LazyTech = lazy(() => import("./Tech"));
export const LazyWorks = lazy(() => import("./Works"));
export const LazyOngoingProjects = lazy(() => import("./OngoingProjects"));
export const LazyExperience = lazy(() => import("./Experience"));
export const LazyContact = lazy(() => import("./Contact"));
