import React from "react";
import { mainCaseData } from "./portfolio-data";
import ImageZoom from "./ImageZoom";
import { useLanguage } from "../../context/LanguageContext";
import LangLink from "../LangLink";

const getStatusIcon = (status) => {
  if (status === "under-construction") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
        role="img"
        className="w-14 h-14 md:w-full md:h-full"
      >
        {/* Circular path for the text */}
        <defs>
          <path
            id="circlePath"
            d="M 40 40 m -30 0 a 30 30 0 1 1 60 0 a 30 30 0 1 1 -60 0"
            fill="none"
            transform="rotate(-10 40 40)"
          />
        </defs>

        {/* Text following the circle */}
        <text className="text-xs font-medium fill-black">
          <textPath href="#circlePath">COMING SOON</textPath>
        </text>

        {/* Construction icon in the center */}
        <g transform="translate(20, 22)">
          <path
            d="M31.6999 34.9002L22.8499 26.0502L27.0499 21.8502L35.8999 30.7002C36.4666 31.2669 36.7499 31.9669 36.7499 32.8002C36.7499 33.6335 36.4666 34.3335 35.8999 34.9002C35.3332 35.4669 34.6332 35.7502 33.7999 35.7502C32.9666 35.7502 32.2666 35.4669 31.6999 34.9002ZM4.09989 34.9002C3.53322 34.3335 3.24989 33.6335 3.24989 32.8002C3.24989 31.9669 3.53322 31.2669 4.09989 30.7002L15.7999 19.0002L12.3999 15.6002C12.0332 15.9669 11.5666 16.1502 10.9999 16.1502C10.4332 16.1502 9.96655 15.9669 9.59989 15.6002L8.44989 14.4502V18.9502C8.44989 19.4169 8.24989 19.7335 7.84989 19.9002C7.44989 20.0669 7.08322 19.9835 6.74989 19.6502L1.29989 14.2002C0.966553 13.8669 0.883219 13.5002 1.04989 13.1002C1.21655 12.7002 1.53322 12.5002 1.99989 12.5002H6.49989L5.39989 11.4002C4.99989 11.0002 4.79989 10.5335 4.79989 10.0002C4.79989 9.46686 4.99989 9.0002 5.39989 8.6002L11.0999 2.9002C11.7666 2.23353 12.4832 1.7502 13.2499 1.4502C14.0166 1.1502 14.7999 1.0002 15.5999 1.0002C16.2666 1.0002 16.8919 1.1002 17.4759 1.3002C18.0599 1.5002 18.6346 1.8002 19.1999 2.2002C19.4666 2.36686 19.6086 2.6002 19.6259 2.9002C19.6432 3.2002 19.5346 3.46686 19.2999 3.7002L15.4999 7.5002L16.5999 8.6002C16.9666 8.96686 17.1499 9.43353 17.1499 10.0002C17.1499 10.5669 16.9666 11.0335 16.5999 11.4002L19.9999 14.8002L24.4999 10.3002C24.3666 9.93353 24.2586 9.5502 24.1759 9.1502C24.0932 8.7502 24.0512 8.3502 24.0499 7.9502C24.0499 5.98353 24.7252 4.32486 26.0759 2.9742C27.4266 1.62353 29.0846 0.948864 31.0499 0.950197C31.3166 0.950197 31.5666 0.958864 31.7999 0.976197C32.0332 0.993531 32.2666 1.03486 32.4999 1.1002C32.7999 1.2002 32.9919 1.40886 33.0759 1.7262C33.1599 2.04353 33.0846 2.3182 32.8499 2.5502L29.5999 5.8002C29.3999 6.0002 29.2999 6.23353 29.2999 6.5002C29.2999 6.76686 29.3999 7.0002 29.5999 7.2002L31.7999 9.4002C31.9999 9.6002 32.2332 9.7002 32.4999 9.7002C32.7666 9.7002 32.9999 9.6002 33.1999 9.4002L36.4499 6.1502C36.6832 5.91686 36.9586 5.83353 37.2759 5.9002C37.5932 5.96686 37.8012 6.16686 37.8999 6.5002C37.9666 6.73353 38.0086 6.96686 38.0259 7.2002C38.0432 7.43353 38.0512 7.68353 38.0499 7.9502C38.0499 9.91686 37.3752 11.5749 36.0259 12.9242C34.6766 14.2735 33.0179 14.9489 31.0499 14.9502C30.6499 14.9502 30.2499 14.9169 29.8499 14.8502C29.4499 14.7835 29.0666 14.6669 28.6999 14.5002L8.29989 34.9002C7.73322 35.4669 7.03322 35.7502 6.19989 35.7502C5.36655 35.7502 4.66655 35.4669 4.09989 34.9002Z"
            fill="#32292f"
          />
        </g>
      </svg>
    );
  }
  return null;
};

function MainCase() {
  const { t } = useLanguage();
  const caseData = mainCaseData[0];

  // Apply translations here
  const translatedCaseData = {
    ...caseData,
    organization: t("portfolio.cases.swedish-aral-sea-society.organization"),
    description: t("portfolio.cases.swedish-aral-sea-society.description"),
    fullDescription: t(
      "portfolio.cases.swedish-aral-sea-society.fullDescription"
    ),
  };

  const isUnderConstruction =
    translatedCaseData.status === "under-construction";

  // make this array once so alt text and pills match
  const categoryLabels = Object.keys(translatedCaseData.category).map((cat) =>
    t(`portfolio.categories.${cat}`)
  );

  return (
    <article className="cases__main grid grid-rows-auto grid-cols-1 lg:grid-rows-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:max-h-[800px] items-strech gap-y-2xs md:gap-y-xs">
      <LangLink
        to={`/case/${translatedCaseData.id}`}
        className="lg:row-span-full lg:col-span-full focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
      >
        <figure
          className="cases__main__image lg:row-span-full lg:col-span-full min-w-0 min-h-0 lg:h-full overflow-hidden relative rounded-[5px] cursor-pointer"
          aria-label={`${translatedCaseData.organization} project image`}
        >
          <ImageZoom
            src={translatedCaseData.image}
            className="aspect-[4/3] lg:h-full overflow-hidden rounded-[5px] lg:rounded-bl-[5px] lg:rounded-tr-[0px]"
          >
            <img
              src={translatedCaseData.image}
              alt={`${translatedCaseData.organization} - ${categoryLabels.join(
                " / "
              )} project`}
              className="w-full h-full object-cover"
            />
          </ImageZoom>
          {isUnderConstruction && (
            <div
              className="absolute top-4 left-4 bg-orange rounded-full p-2 z-10"
              aria-label="Project status: Under construction"
              role="status"
            >
              {getStatusIcon(translatedCaseData.status)}
            </div>
          )}
        </figure>
      </LangLink>
      <div className="cases__main__content min-w-0 min-h-0 lg:px-sm xl:px-md lg:py-[56px] lg:bg-brown lg:row-span-full lg:col-start-2 lg:place-content-end rounded-bl-[5px] rounded-br-[5px] lg:rounded-tr-[5px] lg:rounded-bl-[0px] relative z-10 grid gap-2 md:gap-3">
        <a
          href={`/case/${translatedCaseData.id}`}
          className="block focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          <h3
            id="main-case-heading"
            className="text-white hover:text-white-transparent cursor-pointer"
          >
            {translatedCaseData.organization}
          </h3>
        </a>
        <p className="sr-only md:not-sr-only text-white">
          {translatedCaseData.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-2 md:pt-3xs lg:pt-2xs">
          {Object.keys(translatedCaseData.category).map((cat) => (
            <span
              className="border border-white text-white-transparent md:text-white text-xs font-rubik rounded-[5px] px-2 py-3xs"
              key={cat}
            >
              {t(`portfolio.categories.${cat}`)}
            </span>
          ))}
        </div>
        {isUnderConstruction && (
          <div id="construction-notice" className="sr-only" aria-live="polite">
            This project is currently under construction
          </div>
        )}
      </div>
    </article>
  );
}

export default MainCase;
