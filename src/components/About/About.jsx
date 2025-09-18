import { useState } from "react";
import Skills from "./Skills";
import { skillsList, getTranslatedTimelineItems } from "./about-data";
import TimeLineItem from "./TimeLineItem";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  // Get translated timeline items (same pattern as MainCase)
  const translatedTimelineItems = getTranslatedTimelineItems(t);

  const toggleResume = () => {
    setIsResumeVisible(!isResumeVisible);

    // Announce state change to screen readers
    setAnnouncement(
      isResumeVisible ? "Resume section hidden" : "Resume section expanded"
    );

    // Only scroll when opening the resume section
    if (!isResumeVisible) {
      setTimeout(() => {
        const resumeElement = document.getElementById("resume");
        if (resumeElement) {
          const elementPosition = resumeElement.offsetTop;
          const offsetPosition = elementPosition - 80;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Focus management for screen readers
          resumeElement.setAttribute("tabindex", "-1");
          resumeElement.focus();
        }
      }, 150);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleResume();
    }
  };

  const iconOpen = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 14.9748C11.8667 14.9748 11.7417 14.9541 11.625 14.9128C11.5084 14.8715 11.4 14.8005 11.3 14.6998L6.70005 10.0998C6.51672 9.91647 6.42505 9.68314 6.42505 9.3998C6.42505 9.11647 6.51672 8.88314 6.70005 8.6998C6.88338 8.51647 7.11672 8.4248 7.40005 8.4248C7.68338 8.4248 7.91672 8.51647 8.10005 8.6998L12 12.5998L15.9 8.6998C16.0834 8.51647 16.3167 8.4248 16.6 8.4248C16.8834 8.4248 17.1167 8.51647 17.3 8.6998C17.4834 8.88314 17.575 9.11647 17.575 9.3998C17.575 9.68314 17.4834 9.91647 17.3 10.0998L12.7 14.6998C12.6 14.7998 12.4917 14.8708 12.375 14.9128C12.2584 14.9548 12.1334 14.9755 12 14.9748Z"
        fill="currentColor"
      />
    </svg>
  );

  const iconClose = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 10.7999L8.10005 14.6999C7.91672 14.8832 7.68338 14.9749 7.40005 14.9749C7.11672 14.9749 6.88338 14.8832 6.70005 14.6999C6.51672 14.5166 6.42505 14.2832 6.42505 13.9999C6.42505 13.7166 6.51672 13.4832 6.70005 13.2999L11.3 8.6999C11.5 8.4999 11.7334 8.3999 12 8.3999C12.2667 8.3999 12.5 8.4999 12.7 8.6999L17.3 13.2999C17.4834 13.4832 17.575 13.7166 17.575 13.9999C17.575 14.2832 17.4834 14.5166 17.3 14.6999C17.1167 14.8832 16.8834 14.9749 16.6 14.9749C16.3167 14.9749 16.0834 14.8832 15.9 14.6999L12 10.7999Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <section id="about" className="border-b-[32px] border-teal">
      <div className="px-xs md:px-sm py-md md:py-lg lg:px-lg lg:py-2xl">
        <div className="about__inner max-w-[1240px] mx-auto">
          <section className="about__content grid lg:grid-cols-[7fr_5fr] gap-x-xl gap-y-sm border-b-1 border-teal pb-sm lg:pb-lg">
            <div>
              <h2 className="">{t("aboutTitle")}</h2>
              <p className="">{t("aboutDescriptionIntro")}</p>
              <div className="py-xs lg:py-sm">
                <h3 className="text-xs uppercase text-brown pb-2xs">
                  {t("skills")}
                </h3>
                <Skills />
              </div>
              <p className="">{t("aboutDescriptionOutro")}</p>
            </div>
            <figure className="w-[320px] h-[320px] sm:hidden lg:block lg:w-full lg:h-full place-self-center">
              <img
                src="/assets/images/portfolio__about-image-smaller.png"
                alt="About me"
                className="rounded-full object-cover aspect-square"
              />
            </figure>
          </section>
          <section
            className="about__resume"
            aria-label="Resume and work history"
          >
            <button
              id="resume-button"
              onClick={toggleResume}
              onKeyDown={handleKeyDown}
              aria-expanded={isResumeVisible}
              aria-controls="resume"
              className="resume-button small-button border-teal border-1 mt-sm lg:mt-md flex font-light items-center gap-2 hover:bg-teal-dark hover:text-white transition-colors duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              {isResumeVisible ? t("resumeButtonClose") : t("resumeButtonOpen")}
              <span id="resume-icon" aria-hidden="true">
                {isResumeVisible ? iconClose : iconOpen}
              </span>
            </button>
            <div
              id="resume"
              aria-labelledby="resume-button"
              className={`resume pt-md scroll-mt-20 ${
                isResumeVisible ? "" : "hidden"
              }`}
            >
              <div
                className="flex flex-col gap-md lg:gap-lg relative pl-sm lg:pl-xl ml-sm lg:ml-sm
									before:content-[''] before:absolute before:top-0 before:left-[-8px] lg:before:left-[2px] before:w-[2px] before:h-full before:bg-grey"
              >
                {/* Use the translated timeline items */}
                {translatedTimelineItems.map((item, index) => (
                  <TimeLineItem
                    key={index}
                    {...item} // Pass all the translated data as props
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>
    </section>
  );
};

export default About;
