import { useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-black text-white"
      aria-labelledby="contact-heading"
    >
      <div className="px-xs md:px-sm py-md md:py-lg lg:px-lg lg:py-2xl">
        <div className="contact__inner max-w-[1240px] mx-auto">
          <h2 id="contact-heading">{t("contactTitle")}</h2>
          <div
            className="contact__info__container grid grid-cols-1 lg:grid-cols-[7fr_5fr] rounded-[5px] overflow-hidden"
            role="region"
            aria-label="Contact information"
          >
            <div className="contact__content">
              <div className="contact__content-message lg:mr-md pb-2xs lg:pb-0">
                <p>{t("contactDescription")}</p>
              </div>
              <div
                className="contact__content-meta flex flex-row flex-wrap lg:flex-col gap-x-md gap-y-2xs pt-3xs lg:pt-sm"
                role="list"
                aria-label="Contact details"
              >
                <div role="listitem">
                  <h3 className="text-xs uppercase pb-1 text-white-transparent">
                    {t("footerEmail")}
                  </h3>
                  <p className="text-sm">
                    <a
                      href="mailto:email.email@email.com"
                      className="hover:underline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                      aria-label="Send email to email.email@email.com"
                    >
                      email.email@email.com
                    </a>
                  </p>
                </div>
                <div role="listitem">
                  <h3 className="text-xs uppercase pb-1 text-white-transparent">
                    {t("footerPhone")}
                  </h3>
                  <p className="text-sm">
                    <a
                      href="tel:0762819880"
                      className="hover:underline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                      aria-label="Call 076 - 28 19 880"
                    >
                      076 - 28 19 880
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <figure className="relative" aria-label="Contact illustration">
              <img
                src="/assets/images/contact.png"
                className="hidden lg:block absolute h-full w-full object-cover rounded-[5px]"
                alt="Illustration representing contact and communication"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
