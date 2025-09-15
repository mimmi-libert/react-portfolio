import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCaseById } from "../components/Portfolio/portfolio-data";
import ImageZoom from "../components/Portfolio/ImageZoom";
import GalleryModal from "../components/Portfolio/GalleryModal";
import AllCases from "../components/Portfolio/AllCases";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import CaseHeader from "../components/CaseHeader";
import ClickableImage from "../components/Portfolio/ClickableImage";

const getStatusIcon = (status) => {
  const { t } = useLanguage();
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
          <textPath href="#circlePath">{t("caseStatus")}</textPath>
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

function CaseDetail() {
  const { caseId } = useParams();
  const { t } = useLanguage();
  const caseData = getCaseById(caseId);
  const isUnderConstruction = caseData?.status === "under-construction";
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Translations
  const translatedCaseData = caseData
    ? {
        ...caseData,
        organization: t(`portfolio.cases.${caseId}.organization`),
        description: t(`portfolio.cases.${caseId}.description`),
        fullDescription: t(`portfolio.cases.${caseId}.fullDescription`),
        pdfName: t(`portfolio.cases.${caseId}.pdfName`),
      }
    : null;

  // Create category labels array for alt text
  const categoryLabels = translatedCaseData
    ? Object.keys(translatedCaseData.category).map((cat) =>
        t(`portfolio.categories.${cat}`)
      )
    : [];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [caseId]);

  const openGallery = (index) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  if (!caseData || !translatedCaseData) {
    return (
      <div className="min-h-screen bg-brown text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Case not found</h1>
          <Link to="/" className="text-white-transparent hover:text-white">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {/* Header */}
      <CaseHeader />

      {/* Main Content */}
      <main id="main-content" tabindex="-1" className="pt-[60px] md:pt-[80px]">
        <section
          className="case-hero grid justify-center py-md md:py-lg lg:py-2xl px-2xs md:px-sm lg:px-lg bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${translatedCaseData.image})`,
          }}
        >
          <div className="case-hero__inner max-w-[1240px] mx-auto flex flex-col justify-center items-center">
            <span className="text-orange text-md font-medium uppercase text-center">
              Case
            </span>
            <h1 className="text-white py-3xs text-center">
              {translatedCaseData.organization}
            </h1>
            <div className="hidden sm:flex flex-wrap gap-2 md:gap-3 pt-3xs md:pt-3">
              {Object.keys(translatedCaseData.category).map((cat) => (
                <span
                  className="uppercase text-orange font-rubik font-medium rounded-[5px] px-2 py-3xs"
                  key={cat}
                >
                  {t(`portfolio.categories.${cat}`)}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section
          className="case-detail bg-white text-black py-sm sm:py-md md:py-lg lg:pt-xl px-xs md:px-sm lg:px-lg border-teal border-t-[32px]"
          style={{
            backgroundImage: "url(/assets/images/case-background-design.png)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="case-detail__inner max-w-[1240px] mx-auto grid lg:grid-cols-[7fr_5fr] items-start gap-sm md:gap-md lg:gap-lg">
            <div className="">
              <h2 className="text-lg mb-2 lg:mb-2xs">
                {t("caseHeadingBackground")}
              </h2>
              {Array.isArray(translatedCaseData.fullDescription) ? (
                translatedCaseData.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-sm pb-[12px] lg:pb-2xs">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-sm pb-sm">
                  {translatedCaseData.fullDescription}
                </p>
              )}
              <div className="flex flex-wrap gap-2 md:gap-3 pt-3xs md:pt-3">
                {Object.keys(translatedCaseData.tools).map((tool) => (
                  <span
                    className="border border-teal-dark text-teal-dark font-rubik text-[12px] md:text-xs font-medium rounded-[5px] px-2 py-3xs"
                    key={tool}
                  >
                    {t(`portfolio.tools.${tool}`)}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-[20px] md:gap-xs lg:gap-sm">
              {/* Case Thumbnail */}
              <figure className="overflow-hidden rounded-[5px] relative h-fit aspect-[4/3]">
                <img
                  src={translatedCaseData.image}
                  alt={`${
                    translatedCaseData.organization
                  } - ${categoryLabels.join(" / ")} project`}
                  className="w-full object-cover aspect-[4/3]"
                />
                {isUnderConstruction && (
                  <div
                    className="absolute top-4 right-4 bg-orange rounded-full p-2 z-10"
                    aria-label="Project status: Under construction"
                    role="status"
                  >
                    {getStatusIcon(translatedCaseData.status)}
                  </div>
                )}
              </figure>
              <div className="flex lg:justify-end items-start gap-xs md:gap-sm lg:gap-[40px] pl-[8px] md:pl-[10px] lg:pl-0">
                {caseData?.figmaUrl && (
                  <a
                    href={caseData.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative lg:pr-[18px] flex items-center justify-center before:content-[''] before:h-[40px] before:w-[40px] md:before:h-[48px] md:before:w-[48px] lg:before:h-[56px] lg:before:w-[56px] before:z-0 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:translate-[-50%] before:bg-grey focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="View project on Figma"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="32"
                      viewBox="0 0 20 32"
                      fill="none"
                      className="group-hover:text-teal relative z-10 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black transition-colors duration-100 ease-in-out"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.44505 11.695C3.87971 11.695 3.31991 11.8064 2.7976 12.0227C2.2753 12.2391 1.80072 12.5562 1.40096 12.9559C1.0012 13.3557 0.684099 13.8303 0.467753 14.3526C0.251406 14.8749 0.140054 15.4347 0.140054 16C0.140054 16.5654 0.251406 17.1252 0.467753 17.6475C0.684099 18.1698 1.0012 18.6444 1.40096 19.0441C1.80072 19.4439 2.2753 19.761 2.7976 19.9773C3.31991 20.1937 3.87971 20.305 4.44505 20.305H8.75006V11.695H4.44505ZM8.75006 9.19504H4.44505C3.30308 9.19504 2.20787 8.74139 1.40037 7.93389C0.592869 7.12639 0.139221 6.03119 0.139221 4.88921C0.139221 3.74723 0.592869 2.65202 1.40037 1.84452C2.20787 1.03702 3.30308 0.583374 4.44505 0.583374H8.75006V9.19504ZM11.2501 0.583374V9.19504H15.5551C16.6824 9.17286 17.756 8.70947 18.5454 7.90438C19.3348 7.09929 19.777 6.01673 19.777 4.88921C19.777 3.76168 19.3348 2.67912 18.5454 1.87404C17.756 1.06895 16.6824 0.605554 15.5551 0.583374H11.2501ZM15.5551 11.6934C14.425 11.6932 13.3403 12.1374 12.5349 12.93C11.7295 13.7226 11.268 14.8002 11.2501 15.93V16.0684C11.2639 16.9167 11.528 17.742 12.0094 18.4407C12.4907 19.1394 13.1678 19.6803 13.9555 19.9954C14.7433 20.3105 15.6066 20.3859 16.437 20.2119C17.2674 20.038 18.0279 19.6226 18.623 19.0178C19.2181 18.4131 19.6212 17.6459 19.7817 16.8128C19.9423 15.9797 19.853 15.1177 19.5252 14.3352C19.1974 13.5526 18.6457 12.8843 17.9394 12.4143C17.233 11.9443 16.4035 11.6935 15.5551 11.6934ZM4.44505 22.805C3.5932 22.8047 2.76039 23.057 2.05194 23.53C1.3435 24.0031 0.791242 24.6755 0.465025 25.4625C0.138808 26.2494 0.0532834 27.1154 0.219269 27.9509C0.385254 28.7864 0.795293 29.5539 1.39752 30.1564C1.99976 30.7589 2.76713 31.1692 3.60259 31.3355C4.43804 31.5018 5.30406 31.4166 6.09109 31.0907C6.87813 30.7648 7.55084 30.2128 8.02414 29.5045C8.49743 28.7963 8.75006 27.9636 8.75006 27.1117V22.805H4.44505Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                )}
                {caseData?.pdfUrl && (
                  <a
                    href={caseData.pdfUrl}
                    download
                    className="group relative flex gap-xs w-auto items-center justify-center lg:pr-[8px]"
                    aria-label="Download Nordanvinds Graphic Profile PDF"
                  >
                    <span className="text-xs font-medium text-brown hover:underline">
                      {translatedCaseData.pdfName}
                    </span>
                    <div className="relative before:content-[''] before:h-[32px] before:w-[32px] before:z-0 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:translate-[-50%] before:bg-grey focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        className="relative z-10 w-4 h-4 text-brown group-hover:text-teal"
                      >
                        <path
                          d="M1.71436 8.71429L6.00007 13M6.00007 13L10.2858 8.71429M6.00007 13V1"
                          stroke="currentColor"
                          stroke-width="1.71429"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery px-xs md:px-sm lg:px-lg pb-sm sm:pb-md md:pb-lg lg:pb-xl text-black bg-white border-b-[32px] border-teal">
          <div className="gallery__inner max-w-[1240px] mx-auto">
            {translatedCaseData.gallery &&
              translatedCaseData.gallery.length > 1 && (
                <div className="mb-8">
                  <h2 className="text-lg">{t("caseHeadingGallery")}</h2>
                  <div className="grid md:grid-cols-2 gap-2xs md:gap-sm lg:gap-md">
                    {translatedCaseData.gallery.map((image, index) => (
                      <figure key={index} className="rounded-[5px]">
                        <ClickableImage
                          className="overflow-hidden rounded-[5px] focus-visible:outline-4 focus-visible:outline-teal focus-visible:outline-offset-2"
                          alt={`${
                            translatedCaseData.organization
                          } - ${categoryLabels.join(" / ")} project`}
                          images={translatedCaseData.gallery}
                          initialIndex={index}
                          onClick={(_, idx) => openGallery(idx)}
                        >
                          <ImageZoom className="w-full object-cover aspect-[4/3]">
                            <img
                              src={image}
                              alt={`${
                                translatedCaseData.organization
                              } - ${categoryLabels.join(" / ")} project`}
                              className="aspect-[4/3] object-cover"
                            />
                          </ImageZoom>
                        </ClickableImage>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </section>
        <AllCases />
      </main>

      {/* Footer */}
      <Footer />

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <GalleryModal
          images={translatedCaseData.gallery}
          initialIndex={selectedImageIndex}
          onClose={closeGallery}
        />
      )}
    </div>
  );
}

export default CaseDetail;
