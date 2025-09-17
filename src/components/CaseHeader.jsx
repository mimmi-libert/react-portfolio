import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCaseById } from "./Portfolio/portfolio-data";
import { useLanguage } from "../context/LanguageContext";
import LangLink from "./LangLink";

const CaseHeader = () => {
  const { caseId } = useParams();
  const { language, changeLanguage } = useLanguage();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  // Get case data using the caseId from URL params
  const caseData = getCaseById(caseId);

  // Apply translations to case data
  const translatedCaseData = caseData
    ? {
        ...caseData,
        organization: t(`portfolio.cases.${caseId}.organization`),
        description: t(`portfolio.cases.${caseId}.description`),
        fullDescription: t(`portfolio.cases.${caseId}.fullDescription`),
      }
    : null;

  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "sv" : "en";
    changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed left-0 top-0 z-100 h-[60px] md:h-[80px] bg-black grid items-center transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : ""
      }`}
    >
      {/* Skip to main content*/}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-dark text-white px-xs py-xs z-[9999] font-medium rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        {t("skipToMainContent")}
      </a>
      <div className="px-xs md:px-sm lg:px-lg">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center">
          <LangLink
            to="/"
            reloadDocument={true}
            className="text-orange flex items-center gap-3xs font-rubik text-sm relative
											after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-orange 
											after:transform after:scale-x-0 after:origin-center after:duration-[300ms]
											hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            aria-label="Go to homepage"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              className="w-3 h-3"
            >
              <path
                d="M1.28292 6.93989C1.00202 7.22114 0.844238 7.60239 0.844238 7.99989C0.844238 8.39739 1.00202 8.77864 1.28292 9.05989L6.93892 14.7179C7.07825 14.8572 7.24366 14.9677 7.42571 15.0432C7.60776 15.1186 7.80287 15.1574 7.99992 15.1574C8.19696 15.1574 8.39208 15.1186 8.57413 15.0432C8.75617 14.9677 8.92159 14.8572 9.06092 14.7179C9.20025 14.5786 9.31077 14.4131 9.38618 14.2311C9.46159 14.0491 9.5004 13.8539 9.5004 13.6569C9.5004 13.4598 9.46159 13.2647 9.38618 13.0827C9.31077 12.9006 9.20025 12.7352 9.06092 12.5959L5.96492 9.49989H17.4999C17.8977 9.49989 18.2793 9.34185 18.5606 9.06055C18.8419 8.77925 18.9999 8.39771 18.9999 7.99989C18.9999 7.60206 18.8419 7.22053 18.5606 6.93923C18.2793 6.65792 17.8977 6.49989 17.4999 6.49989H5.96492L9.06092 3.40389C9.34218 3.12249 9.50014 2.74089 9.50005 2.34304C9.49995 1.94518 9.34181 1.56365 9.06042 1.28239C8.77902 1.00113 8.39742 0.843168 7.99956 0.843262C7.60171 0.843356 7.22018 1.00149 6.93892 1.28289L1.28292 6.93989Z"
                fill="currentColor"
              />
            </svg>
            {t("backToHome")}
          </LangLink>

          {/* Language toggle button */}
          <div className="flex items-center justify-end">
            <button
              onClick={handleLanguageToggle}
              className="md:mr-[8px] relative w-[40px] h-[40px] before:content-[''] before:absolute before:block before:w-[36px] before:h-[36px]
                md:before:w-[48px] md:before:h-[48px] before:rounded-full before:transition-colors
                before:duration-300 before:ease-in-out before:top-1/2 before:left-1/2 before:translate-[-50%] before:bg-[rgba(247,247,247,0.1)] inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-8 focus-visible:ring-offset-black focus:rounded-full"
              aria-label={`Switch to ${
                language === "en" ? "Swedish" : "English"
              }`}
            >
              <span className="relative text-orange font-rubik text-sm uppercase after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-orange after:transform after:scale-x-0 after:origin-center after:duration-[300ms] hover:after:scale-x-100">
                {language === "en" ? "SV" : "EN"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CaseHeader;
