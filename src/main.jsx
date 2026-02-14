import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import {
  initPerformanceMonitoring,
  observeLongTasks,
} from "./utils/performance";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize performance monitoring
// Note: Runs in both dev and prod, but only logs to console in dev
initPerformanceMonitoring();

// Monitor long tasks (tasks > 50ms that block the main thread)
observeLongTasks();
