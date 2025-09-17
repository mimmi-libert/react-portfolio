import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import logo from "/assets/images/logo-placeholder.png";
import LangLink from "./LangLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const responsiveMenuRef = useRef(null);
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target) &&
        responsiveMenuRef.current &&
        !responsiveMenuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    // Announce menu state change to screen readers
    if (!menuOpen) {
      // Menu is opening
      setTimeout(() => {
        const firstMenuItem = document.querySelector("#responsive-menu a");
        if (firstMenuItem) {
          firstMenuItem.focus();
        }
      }, 100);
    }
  };

  const handleMenuKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleMenuToggle();
    }
  };

  const handleMenuItemKeyDown = (event, isLastItem) => {
    if (event.key === "Tab" && isLastItem && !event.shiftKey) {
      // If tabbing forward on the last item, redirect to menu button
      event.preventDefault();
      menuButtonRef.current?.focus();
    }
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "sv" : "en";
    changeLanguage(newLanguage);
  };

  const mainMenu = [
    { id: 1, label: t("portfolioNav"), href: "#portfolio" },
    { id: 2, label: t("aboutNav"), href: "#about" },
    { id: 3, label: t("contactNav"), href: "#contact" },
  ];

  const responsiveMenu = [
    { id: 1, label: t("portfolioNav"), href: "#portfolio" },
    { id: 2, label: t("aboutNav"), href: "#about" },
    { id: 3, label: t("contactNav"), href: "#contact" },
  ];

  return (
    <header
      className={`w-full top-0 fixed left-0 z-100 h-[60px] md:h-[80px] bg-black grid items-center transition-shadow duration-300 ${
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
        <div className="header__inner max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] items-center">
          <LangLink
            to="/"
            reloadDocument={true}
            className="header__logo h-[1.15rem] md:h-[1.5rem] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            aria-label="Go to homepage"
          >
            <img className="h-full" src={logo} alt="Website logo" />
          </LangLink>

          {/* Main menu */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul
              className="main-menu gap-x-sm justify-center flex"
              role="menubar"
            >
              {mainMenu.map((item) => (
                <li key={item.id}>
                  <a
                    className="text-orange font-rubik text-sm uppercase relative pb-3xs
											after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-orange 
											after:transform after:scale-x-0 after:origin-center after:duration-[300ms]
											hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    href={item.href}
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu buttons */}
          <div className="menu__buttons flex items-center justify-end gap-[8px]">
            <button
              onClick={handleLanguageToggle}
              className="w-[40px] h-[40px] inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-8 focus-visible:ring-offset-black focus:rounded-full"
              aria-label={`Switch to ${
                language === "en" ? "Swedish" : "English"
              }`}
            >
              <span
                className="relative md:mr-[8px] text-orange font-rubik text-sm uppercase
                before:content-[''] before:absolute before:block before:w-[36px] before:h-[36px]
                md:before:w-[48px] md:before:h-[48px] before:rounded-full before:transition-colors
                before:duration-300 before:ease-in-out before:top-1/2 before:left-1/2 before:translate-[-50%] before:bg-[rgba(247,247,247,0.1)]
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-orange after:transform after:scale-x-0 after:origin-center after:duration-[300ms] hover:after:scale-x-100"
              >
                {language === "en" ? "SV" : "EN"}
              </span>
            </button>
            <button
              ref={menuButtonRef}
              id="responsive-menu-button"
              className="relative w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:hidden flex justify-center items-center focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="responsive-menu"
              aria-haspopup="true"
              onClick={handleMenuToggle}
              onKeyDown={handleMenuKeyDown}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.86122 12.1903L16.4955 18.652C16.8475 18.9949 17.325 19.1875 17.8228 19.1875C18.3207 19.1875 18.7982 18.9949 19.1502 18.652C19.5022 18.3091 19.7 17.8441 19.7 17.3592C19.7 16.8743 19.5022 16.4093 19.1502 16.0664L12.5134 9.6047L19.1489 3.14303C19.3232 2.97325 19.4614 2.77171 19.5556 2.54992C19.6499 2.32813 19.6984 2.09043 19.6983 1.85038C19.6982 1.61034 19.6496 1.37266 19.5553 1.15091C19.4609 0.92916 19.3226 0.727686 19.1483 0.557991C18.974 0.388295 18.7671 0.2537 18.5394 0.161892C18.3117 0.0700841 18.0676 0.0228601 17.8211 0.0229167C17.5747 0.0229733 17.3307 0.070309 17.103 0.162222C16.8753 0.254134 16.6685 0.388824 16.4942 0.5586L9.86122 7.02028L3.22695 0.5586C3.05393 0.383954 2.84693 0.24462 2.61803 0.148726C2.38913 0.0528319 2.14291 0.00229916 1.89374 7.66479e-05C1.64458 -0.00214587 1.39745 0.043986 1.16679 0.135781C0.936121 0.227575 0.726535 0.363194 0.550257 0.534724C0.37398 0.706254 0.234541 0.91026 0.140077 1.13484C0.0456134 1.35942 -0.0019836 1.60007 6.33236e-05 1.84276C0.00211025 2.08544 0.0537599 2.3253 0.151999 2.54834C0.250238 2.77137 0.393099 2.97312 0.572247 3.14181L7.20901 9.6047L0.573498 16.0676C0.394351 16.2363 0.25149 16.438 0.153251 16.6611C0.0550115 16.8841 0.0033612 17.124 0.00131427 17.3667C-0.00073265 17.6093 0.0468643 17.85 0.141328 18.0746C0.235792 18.2991 0.375231 18.5032 0.551508 18.6747C0.727786 18.8462 0.937372 18.9818 1.16804 19.0736C1.3987 19.1654 1.64583 19.2116 1.895 19.2093C2.14416 19.2071 2.39038 19.1566 2.61928 19.0607C2.84818 18.9648 3.05518 18.8255 3.2282 18.6508L9.86122 12.1903Z"
                    fill="#F9A03F"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="18"
                  viewBox="0 0 28 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.00001 18C1.57501 18 1.21901 17.856 0.932005 17.568C0.645005 17.28 0.501005 16.924 0.500005 16.5C0.499005 16.076 0.643005 15.72 0.932005 15.432C1.22101 15.144 1.57701 15 2.00001 15H26C26.425 15 26.7815 15.144 27.0695 15.432C27.3575 15.72 27.501 16.076 27.5 16.5C27.499 16.924 27.355 17.2805 27.068 17.5695C26.781 17.8585 26.425 18.002 26 18H2.00001ZM2.00001 10.5C1.57501 10.5 1.21901 10.356 0.932005 10.068C0.645005 9.78 0.501005 9.424 0.500005 9C0.499005 8.576 0.643005 8.22 0.932005 7.932C1.22101 7.644 1.57701 7.5 2.00001 7.5H26C26.425 7.5 26.7815 7.644 27.0695 7.932C27.3575 8.22 27.501 8.576 27.5 9C27.499 9.424 27.355 9.7805 27.068 10.0695C26.781 10.3585 26.425 10.502 26 10.5H2.00001ZM2.00001 3C1.57501 3 1.21901 2.856 0.932005 2.568C0.645005 2.28 0.501005 1.924 0.500005 1.5C0.499005 1.076 0.643005 0.72 0.932005 0.432C1.22101 0.144 1.57701 0 2.00001 0H26C26.425 0 26.7815 0.144 27.0695 0.432C27.3575 0.72 27.501 1.076 27.5 1.5C27.499 1.924 27.355 2.2805 27.068 2.5695C26.781 2.8585 26.425 3.002 26 3H2.00001Z"
                    fill="#F9A03F"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for blur effect */}
      {menuOpen && (
        <div
          className="fixed top-[80px] left-0 right-0 bottom-0 bg-black/50 backdrop-blur-xs z-50 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />
      )}

      {/* Responsive menu */}
      {menuOpen && (
        <nav
          ref={responsiveMenuRef}
          id="responsive-menu"
          className="responsive-menu absolute top-full left-0 w-full bg-black border-b border-orange/50 z-[60] lg:hidden"
          aria-label="Mobile navigation"
          aria-hidden="false"
        >
          <ul
            className="px-sm pt-2xs pb-sm flex flex-col gap-y-xs items-end"
            role="menu"
          >
            {responsiveMenu.map((item, index) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block relative text-orange font-rubik text-sm uppercase after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-orange after:transform after:scale-x-0 after:origin-center after:duration-[300ms]
 									hover:after:scale-x-100"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  onKeyDown={(event) =>
                    handleMenuItemKeyDown(
                      event,
                      index === responsiveMenu.length - 1
                    )
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
