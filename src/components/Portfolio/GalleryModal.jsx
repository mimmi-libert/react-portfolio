import React, { useState, useEffect, useRef } from "react";

const GalleryModal = ({ images, isOpen, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const modalRef = useRef(null);
  const innerRef = useRef(null);
  const mainImageRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Minimum swipe distance (px)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    const dialog = modalRef.current;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onclose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Handle arrow keys for navigation
  useEffect(() => {
    const handleArrowKeys = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };

    document.addEventListener("keydown", handleArrowKeys);
    return () => document.removeEventListener("keydown", handleArrowKeys);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleOutsideClick = (e) => {
    if (innerRef.current && !innerRef.current.contains(e.target)) {
      handleClose();
    }
  };

  return (
    <dialog
      ref={modalRef}
      className="backdrop:bg-black/80 m-auto bg-transparent rounded-[5px] overflow-hidden"
      aria-labelledby="gallery-modal-heading"
      aria-describedby="gallery-modal-description"
      onClose={handleClose}
      open={false}
      onMouseDown={handleOutsideClick}
    >
      {/* Bottom focus sentinel (loops back to Close) */}
      <div
        className="sr-only"
        tabIndex="0"
        aria-hidden="true"
        onFocus={() => closeButtonRef.current?.focus()}
      />

      <div
        ref={innerRef}
        className="dialog__inner relative grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)_min-content] m-auto outline-none max-w-[1024px] max-h-[840px] rounded-[5px] overflow-hidden bg-white"
      >
        {/* Header with close button */}
        <div className="flex justify-end">
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            className="relative mt-3xs mr-3xs md:mt-2xs md:mr-2xs text-brown w-[48px] h-[48px] rounded-full transition-colors duration-300 ease-in-out hover:bg-grey focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal focus-visible:ring-offset-2 flex items-center justify-center"
            aria-label="Close gallery"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              aria-hidden="true"
              className="relative w-4 h-4 md:w-6 md:h-6 z-10"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.86122 12.1903L16.4955 18.652C16.8475 18.9949 17.325 19.1875 17.8228 19.1875C18.3207 19.1875 18.7982 18.9949 19.1502 18.652C19.5022 18.3091 19.7 17.8441 19.7 17.3592C19.7 16.8743 19.5022 16.4093 19.1502 16.0664L12.5134 9.6047L19.1489 3.14303C19.3232 2.97325 19.4614 2.77171 19.5556 2.54992C19.6499 2.32813 19.6984 2.09043 19.6983 1.85038C19.6982 1.61034 19.6496 1.37266 19.5553 1.15091C19.4609 0.92916 19.3226 0.727686 19.1483 0.557991C18.974 0.388295 18.7671 0.2537 18.5394 0.161892C18.3117 0.0700841 18.0676 0.0228601 17.8211 0.0229167C17.5747 0.0229733 17.3307 0.070309 17.103 0.162222C16.8753 0.254134 16.6685 0.388824 16.4942 0.5586L9.86122 7.02028L3.22695 0.5586C3.05393 0.383954 2.84693 0.24462 2.61803 0.148726C2.38913 0.0528319 2.14291 0.00229916 1.89374 7.66479e-05C1.64458 -0.00214587 1.39745 0.043986 1.16679 0.135781C0.936121 0.227575 0.726535 0.363194 0.550257 0.534724C0.37398 0.706254 0.234541 0.91026 0.140077 1.13484C0.0456134 1.35942 -0.0019836 1.60007 6.33236e-05 1.84276C0.00211025 2.08544 0.0537599 2.3253 0.151999 2.54834C0.250238 2.77137 0.393099 2.97312 0.572247 3.14181L7.20901 9.6047L0.573498 16.0676C0.394351 16.2363 0.25149 16.438 0.153251 16.6611C0.0550115 16.8841 0.0033612 17.124 0.00131427 17.3667C-0.00073265 17.6093 0.0468643 17.85 0.141328 18.0746C0.235792 18.2991 0.375231 18.5032 0.551508 18.6747C0.727786 18.8462 0.937372 18.9818 1.16804 19.0736C1.3987 19.1654 1.64583 19.2116 1.895 19.2093C2.14416 19.2071 2.39038 19.1566 2.61928 19.0607C2.84818 18.9648 3.05518 18.8255 3.2282 18.6508L9.86122 12.1903Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Main image area */}
        <div className="relative overflow-hidden px-2xs md:px-lg">
          <div
            ref={mainImageRef}
            className="w-full h-full flex items-center justify-center aspect-[4/3] rounded-[5px] overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-sm md:left-2xs bg-grey hover:bg-black-transparent top-1/2 transform -translate-y-1/2 p-1 md:p-2 text-brown rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-sm md:right-2xs top-1/2 transform -translate-y-1/2 bg-grey p-1 md:p-2 text-brown rounded-full hover:bg-black-transparent transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div>
          <div className="grid grid-cols-6 grid-rows-1 justify-center gap-1 md:gap-2 overflow-x-auto px-2xs md:px-lg pt-2 md:pt-2xs pb-xs md:pb-md">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`rounded-[5px] aspect-[4/3] border-4 overflow-hidden transition-all focus-visible:outline-4 focus-visible:outline-teal focus-visible:outline-offset-0 ${
                  index === currentIndex
                    ? "border-teal"
                    : " border-white hover:border-black-transparent"
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full object-cover w-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom focus sentinel (loops back to Close) */}
        <div
          className="sr-only"
          tabIndex="0"
          aria-hidden="true"
          onFocus={() => closeButtonRef.current?.focus()}
        />
      </div>
    </dialog>
  );
};

export default GalleryModal;
