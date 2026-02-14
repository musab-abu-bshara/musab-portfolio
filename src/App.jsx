import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Hero, Navbar, Footer } from "./components";

// Import lazy sections
import {
  LazyTech,
  LazyWorks,
  LazyOngoingProjects,
  LazyExperience,
  LazyContact,
} from "./components/LazyComponents";

// Import Stars canvas DIRECTLY (not lazy) to prevent white flash
// import { StarsCanvas } from "./components/canvas";

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full min-h-[400px] flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter basename="/musab-portfolio">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-0 bg-primary">
          <About />
          {/* <StarsCanvas /> */}
        </div>

        <Suspense fallback={<SectionLoader />}>
          <LazyExperience />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazyTech />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazyWorks />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazyOngoingProjects />
        </Suspense>

        <div className="relative z-0 bg-primary">
          <Suspense fallback={<SectionLoader />}>
            <LazyContact />
          </Suspense>
          {/* <StarsCanvas /> */}
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
