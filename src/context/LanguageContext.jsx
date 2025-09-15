import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { en } from "../translations/en.js";
import { sv } from "../translations/sv.js";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Detect language from URL
  const getLanguageFromURL = () => {
    const path = location.pathname;
    if (path.startsWith("/en")) {
      return "en";
    }
    return "sv"; // Default to Swedish
  };

  const [language, setLanguage] = useState(getLanguageFromURL);

  // Update language when URL changes
  useEffect(() => {
    setLanguage(getLanguageFromURL());
  }, [location.pathname]);

  const changeLanguage = (newLanguage) => {
    const currentPath = location.pathname;

    if (newLanguage === "en") {
      // Switch to English
      if (currentPath === "/") {
        navigate("/en");
      } else if (currentPath.startsWith("/case/")) {
        const caseId = currentPath.split("/case/")[1];
        navigate(`/en/case/${caseId}`);
      } else if (!currentPath.startsWith("/en")) {
        navigate(`/en${currentPath}`);
      }
    } else {
      // Switch to Swedish
      if (currentPath.startsWith("/en")) {
        const swedishPath = currentPath.replace("/en", "") || "/";
        navigate(swedishPath);
      }
    }
  };

  const translations = {
    en,
    sv,
  };

  const t = (key) => {
    const keys = key.split(".");
    let result = translations[language];
    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result || key;
  };

  const localizePath = (path) => {
    if (language === "en") {
      return path.startsWith("/en") ? path : `/en${path}`;
    }
    return path.replace(/^\/en/, "") || "/";
  };

  const value = {
    language,
    changeLanguage,
    t,
    translations,
    localizePath,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
