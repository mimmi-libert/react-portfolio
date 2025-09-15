import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const timeoutRef = useRef(null);

  const words =
    language === "en"
      ? ["a working website.", "engaging design.", "a strong brand."]
      : [
          "en färdig webbplats.",
          "engagerande design.",
          "ett starkt varumärke.",
        ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Disable animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setText(words[0]); // Shows first word immediately
      return;
    }

    const typingSpeed = isDeleting ? 40 : 100;
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of word before deleting
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      // Move to next word after deleting
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeoutRef.current = setTimeout(() => {}, 300);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, typingSpeed);
    }

    setText(currentWord.slice(0, charIndex));

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <section
      className="hero grid bg-black w-full hero-bg-responsive"
      style={{
        backgroundImage: "url(/assets/images/hero-image.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-xs md:px-sm lg:px-lg py-md md:py-xl lg:py-2xl xl:py-3xl flex flex-col justify-center">
        <div className="hero__inner">
          <div className="hero__content max-w-[1240px] mx-auto text-white flex flex-col gap-2xs md:gap-2xs lg:gap-xs">
            <h1 className="sr-only">Mimmi Libert - Portfolio</h1>
            <h2 className="heading-1 flex flex-col sm:flex-row sm:gap-3 leading-tight">
              {t("heroTitle")}
              <span
                className="text-orange min-h-[1.25em]"
                id="typewriter"
                aria-live="polite"
                aria-label={text || "Loading..."}
              >
                {" "}
                {text}
              </span>
            </h2>
            <p className="ingress text-md leading-normal">
              {t("heroSubtitle")} <br></br>
              {t("heroSubtitle2")}
            </p>
            <div className="hero__buttons flex flex-wrap gap-y-2xs gap-x-2xs md:gap-x-xs pt-3xs md:pt-2xs">
              <a
                href="#contact"
                className="button button--teal focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                {t("contactScroll")}
              </a>
              <a
                href="#portfolio"
                className="button button--brown focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                {t("portfolioScroll")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
