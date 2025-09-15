import React, { useState, useEffect, useRef } from "react";

const ImageZoom = ({ className = "", children }) => {
  const [isScreenLargeEnough, setIsScreenLargeEnough] = useState(false);
  const containerRef = useRef(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenLargeEnough(window.innerWidth >= 768); // md breakpoint is 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden transition-transform duration-300 ${
        isScreenLargeEnough ? "hover:scale-105 focus-within:scale-105" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ImageZoom;
