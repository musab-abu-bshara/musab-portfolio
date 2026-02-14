import React from "react";

/**
 * Error Boundary for 3D Canvas components.
 * Catches WebGL context loss, R3F rendering errors, and texture loading failures.
 * Renders a graceful fallback instead of the broken "unhappy face" white square.
 */
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Silently log — don't crash the whole page
    console.warn("[CanvasErrorBoundary] 3D render error:", error?.message);
  }

  render() {
    if (this.state.hasError) {
      // If a custom fallback is provided, use it; otherwise render nothing
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

export default CanvasErrorBoundary;
