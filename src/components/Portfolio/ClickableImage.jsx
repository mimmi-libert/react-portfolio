import React from "react";

const ClickableImage = ({
  className = "",
  children,
  src,
  alt,
  onClick,
  images = [],
  initialIndex = 0,
}) => {
  const handleClick = () => {
    if (onClick && images.length > 0) {
      onClick(images, initialIndex);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      tabIndex="0"
      role="button"
      aria-label={`Click to view ${alt} in gallery`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};

export default ClickableImage;
