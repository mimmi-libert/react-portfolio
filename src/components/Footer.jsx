import logo from "/assets/images/Logo-v2.png";
import { useLanguage } from "../context/LanguageContext";
import LangLink from "./LangLink";

const Footer = () => {
  const { t } = useLanguage();

  const footerMenu = [
    { id: 1, label: t("portfolioNav"), href: "#portfolio" },
    { id: 2, label: t("aboutNav"), href: "#about" },
    { id: 3, label: t("contactNav"), href: "#contact" },
  ];

  return (
    <footer className="bg-black" aria-label="Site footer">
      <div className="px-sm py-md md:py-lg lg:px-md lg:py-lg border-b border-t border-gray-500">
        <div className="footer__inner max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[7fr_5fr] gap-y-sm">
          <a
            href="/"
            className="footer__logo place-self-center md:place-self-start focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            aria-label="Go to homepage"
          >
            <img
              className="max-w-[150px] md:max-w-[200px]"
              src={logo}
              alt="Mimmi Libert Logo"
            />
          </a>
          <div className="flex flex-col gap-y-xs items-center md:items-start md:flex-row md:justify-between">
            <nav aria-label="Footer navigation">
              <h2 className="text-orange text-sm mb-0 pb-2 md:pb-2xs text-center md:text-left">
                {t("footerQuickLinks")}
              </h2>
              <ul className="footer-menu flex flex-col gap-3xs">
                {footerMenu.map((item) => (
                  <li key={item.id} className="text-center md:text-left">
                    <LangLink
                      to={{ pathname: "/", hash: item.href }}
                      className="text-white text-sm relative pb-3xs
                                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-orange 
                                      after:transform after:scale-x-0 after:origin-center after:duration-[300ms]
                                      hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      {item.label}
                    </LangLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="text-orange mb-0 text-sm pb-2 md:pb-2xs text-center md:text-left">
                {t("footerContact")}
              </h2>
              <ul className="flex flex-col gap-3xs items-center md:items-start">
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <title>Email icon</title>
                    <path
                      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z"
                      fill="#F9A040"
                    />
                  </svg>
                  <a
                    href="mailto:mimmi.libert@gmail.com"
                    className="text-white text-sm relative pb-3xs
											after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-orange 
											after:transform after:scale-x-0 after:origin-center after:duration-[300ms]
											hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    aria-label="Send email to mimmi.libert@gmail.com"
                  >
                    mimmi.libert@gmail.com
                  </a>
                </li>
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <title>Phone icon</title>
                    <path
                      d="M19.23 15.2598L16.69 14.9698C16.3914 14.9347 16.0887 14.9678 15.8046 15.0665C15.5206 15.1652 15.2626 15.327 15.05 15.5398L13.21 17.3798C10.3714 15.9357 8.0641 13.6284 6.62004 10.7898L8.47004 8.93977C8.90004 8.50977 9.11004 7.90977 9.04004 7.29977L8.75004 4.77977C8.69356 4.29186 8.45951 3.84179 8.0925 3.51536C7.7255 3.18893 7.25121 3.00897 6.76004 3.00977H5.03004C3.90004 3.00977 2.96004 3.94977 3.03004 5.07977C3.56004 13.6198 10.39 20.4398 18.92 20.9698C20.05 21.0398 20.99 20.0998 20.99 18.9698V17.2398C21 16.2298 20.24 15.3798 19.23 15.2598Z"
                      fill="#F9A040"
                    />
                  </svg>
                  <a
                    href="tel:+46762819880"
                    className="text-white text-sm relative pb-3xs
											after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-orange 
											after:transform after:scale-x-0 after:origin-center after:duration-[300ms]
											hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    aria-label="Call phone number 076 28 19 880"
                  >
                    076 28 19 880
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__side-bar px-sm py-xs lg:px-lg">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center sm:items-start sm:flex-row gap-xs justify-between">
          <p className="text-xs text-center sm:text-left text-white-transparent break-words md:break-normal">
            {t("footerCopyright")}
            <br className="md:hidden" /> {t("footerCopyrightSubtitle")}
          </p>
          <div className="flex gap-2xs items-center order-first sm:order-last">
            <p className="text-white text-xs">{t("footerReact")}</p>
            <a
              href="#"
              className="group relative flex items-center justify-center before:content-[''] before:h-[32px] before:w-[32px] before:z-0 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:translate-[-50%] before:bg-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-8 focus-visible:ring-offset-black focus:rounded-full"
              aria-label="View website on Github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="group-hover:text-teal relative z-10 w-6 h-6 text-black transition-colors duration-100 ease-in-out"
              >
                <path
                  d="M11.7067 3.85002C12.9589 4.27258 14.1498 4.85876 15.2484 5.59335C16.8009 5.19598 18.3975 4.99662 20.0001 5.00002C21.6551 5.00002 23.2517 5.20669 24.7484 5.59169C25.8466 4.85781 27.0369 4.27219 28.2884 3.85002C29.4501 3.45502 31.1051 2.81502 32.0884 3.90336C32.7551 4.64336 32.9217 5.88336 33.0401 6.83002C33.1734 7.88669 33.2051 9.26335 32.8551 10.63C34.1934 12.3584 35.0001 14.42 35.0001 16.6667C35.0001 20.07 33.1567 23.025 30.4284 25.0717C29.1147 26.0432 27.6586 26.8056 26.1117 27.3317C26.4684 28.1484 26.6667 29.0517 26.6667 30V35C26.6667 35.442 26.4911 35.866 26.1786 36.1785C25.866 36.4911 25.4421 36.6667 25.0001 36.6667H15.0001C14.558 36.6667 14.1341 36.4911 13.8215 36.1785C13.509 35.866 13.3334 35.442 13.3334 35V33.3484C11.7417 33.5434 10.4067 33.37 9.27172 32.8884C8.08506 32.385 7.25839 31.605 6.63672 30.8584C6.04672 30.1517 5.40339 28.5584 4.47339 28.2484C4.26568 28.1792 4.07363 28.0698 3.9082 27.9264C3.74277 27.783 3.60721 27.6085 3.50924 27.4127C3.31139 27.0173 3.27871 26.5595 3.41839 26.14C3.55807 25.7205 3.85867 25.3737 4.25406 25.1759C4.64945 24.978 5.10724 24.9453 5.52672 25.085C6.63672 25.455 7.36006 26.255 7.85506 26.8984C8.65506 27.9317 9.30506 29.2817 10.5717 29.82C11.0934 30.0417 11.8584 30.1867 13.0551 30.0234L13.3334 29.9667C13.3372 29.0597 13.5261 28.1631 13.8884 27.3317C12.3415 26.8056 10.8854 26.0432 9.57172 25.0717C6.84339 23.025 5.00006 20.0717 5.00006 16.6667C5.00006 14.4234 5.80506 12.3634 7.14006 10.6367C6.79006 9.27002 6.82006 7.89002 6.95339 6.83169L6.96172 6.76835C7.08339 5.79835 7.22506 4.65669 7.90506 3.90336C8.88839 2.81502 10.5451 3.45669 11.7051 3.85169L11.7067 3.85002Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
