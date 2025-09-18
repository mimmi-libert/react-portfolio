import React from "react";
import PromoCard from "./PromoCard";
import { useLanguage } from "../../context/LanguageContext";

// SVG Components
const DesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
    aria-hidden="true"
  >
    <path
      d="M10.6668 19.3333C5.51216 19.3333 1.3335 15.1546 1.3335 9.99996C1.3335 4.84529 5.51216 0.666626 10.6668 0.666626C15.8215 0.666626 20.0002 4.84529 20.0002 9.99996"
      stroke="#705D56"
      strokeWidth="1.33333"
      strokeLinejoin="round"
    />
    <path
      d="M27.3333 10H10V27.3333H27.3333V10Z"
      fill="#705D56"
      stroke="#705D56"
      strokeWidth="1.33333"
      strokeLinejoin="round"
    />
  </svg>
);

const ContentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
    aria-hidden="true"
  >
    <path
      d="M15.1997 24.2146L25.061 14.3533C23.4021 13.6603 21.8954 12.6482 20.6264 11.3746C19.3521 10.1053 18.3396 8.59815 17.6464 6.93862L7.78503 16.8C7.0157 17.5693 6.63037 17.9546 6.2997 18.3786C5.90956 18.8793 5.57472 19.4206 5.30103 19.9933C5.07037 20.4786 4.89837 20.996 4.55437 22.028L2.73837 27.472C2.65478 27.7212 2.64238 27.9888 2.70256 28.2448C2.76273 28.5007 2.8931 28.7348 3.079 28.9207C3.26489 29.1066 3.49896 29.2369 3.75488 29.2971C4.0108 29.3573 4.27844 29.3449 4.5277 29.2613L9.9717 27.4453C11.005 27.1013 11.521 26.9293 12.0064 26.6986C12.5815 26.4248 13.1197 26.092 13.621 25.7C14.045 25.3693 14.4304 24.984 15.1997 24.2146ZM27.797 11.6173C28.7803 10.634 29.3327 9.30047 29.3327 7.90995C29.3327 6.51943 28.7803 5.18587 27.797 4.20262C26.8138 3.21937 25.4802 2.66699 24.0897 2.66699C22.6992 2.66699 21.3656 3.21937 20.3824 4.20262L19.1997 5.38529L19.2504 5.53329C19.833 7.20099 20.7868 8.71461 22.0397 9.95995C23.3223 11.2504 24.8889 12.2229 26.6144 12.8L27.797 11.6173Z"
      fill="#705D56"
    />
  </svg>
);

const DevelopmentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]"
    aria-hidden="true"
  >
    <path
      d="M15.9998 20.6666C14.7621 20.6666 13.5751 20.175 12.7 19.2998C11.8248 18.4246 11.3331 17.2376 11.3331 16C11.3331 14.7623 11.8248 13.5753 12.7 12.7001C13.5751 11.825 14.7621 11.3333 15.9998 11.3333C17.2375 11.3333 18.4244 11.825 19.2996 12.7001C20.1748 13.5753 20.6665 14.7623 20.6665 16C20.6665 17.2376 20.1748 18.4246 19.2996 19.2998C18.4244 20.175 17.2375 20.6666 15.9998 20.6666ZM25.9065 17.2933C25.9598 16.8666 25.9998 16.44 25.9998 16C25.9998 15.56 25.9598 15.12 25.9065 14.6666L28.7198 12.4933C28.9731 12.2933 29.0398 11.9333 28.8798 11.64L26.2131 7.02663C26.0531 6.7333 25.6931 6.6133 25.3998 6.7333L22.0798 8.06663C21.3865 7.54663 20.6665 7.0933 19.8265 6.75996L19.3331 3.22663C19.306 3.06958 19.2242 2.9272 19.1022 2.8247C18.9802 2.7222 18.8258 2.6662 18.6665 2.66663H13.3331C12.9998 2.66663 12.7198 2.90663 12.6665 3.22663L12.1731 6.75996C11.3331 7.0933 10.6131 7.54663 9.91979 8.06663L6.59979 6.7333C6.30645 6.6133 5.94645 6.7333 5.78645 7.02663L3.11979 11.64C2.94645 11.9333 3.02645 12.2933 3.27979 12.4933L6.09312 14.6666C6.03979 15.12 5.99979 15.56 5.99979 16C5.99979 16.44 6.03979 16.8666 6.09312 17.2933L3.27979 19.5066C3.02645 19.7066 2.94645 20.0666 3.11979 20.36L5.78645 24.9733C5.94645 25.2666 6.30645 25.3733 6.59979 25.2666L9.91979 23.92C10.6131 24.4533 11.3331 24.9066 12.1731 25.24L12.6665 28.7733C12.7198 29.0933 12.9998 29.3333 13.3331 29.3333H18.6665C18.9998 29.3333 19.2798 29.0933 19.3331 28.7733L19.8265 25.24C20.6665 24.8933 21.3865 24.4533 22.0798 23.92L25.3998 25.2666C25.6931 25.3733 26.0531 25.2666 26.2131 24.9733L28.8798 20.36C29.0398 20.0666 28.9731 19.7066 28.7198 19.5066L25.9065 17.2933Z"
      fill="#705D56"
    />
  </svg>
);

// Define the data structure with default English text
const cards = [
  {
    title: "Design",
    description:
      "Creating visuals in Figma, Photoshop and Illustrator that reflect the client's brand and connects with its audience.",
    icon: DesignIcon,
    image: "/assets/images/portfolio__design-image-1.png",
  },
  {
    title: "Development",
    description:
      "Building accessible and reliable websites in frameworks adapted to the client's needs and wishes.",
    icon: DevelopmentIcon,
    image: "/assets/images/portfolio__development-image.png",
  },
  {
    title: "Content",
    description:
      "Ensuring the content is clear and effective and that the website is easy to navigate and understand.",
    icon: ContentIcon,
    image: "/assets/images/portfolio__content-image.png",
  },
];

function Promo() {
  const { t } = useLanguage();

  // Create translated version of the cards data (same pattern as MainCase)
  const translatedCards = cards.map((card, index) => {
    const cardTypes = ["design", "development", "content"];
    const cardType = cardTypes[index];

    return {
      ...card,
      title: t(cardType) || card.title, // Use translation or fallback to default
      description: t(`${cardType}Description`) || card.description, // Use translation or fallback to default
    };
  });

  return (
    <section className="promo grid border-t-[32px] border-b-[32px] border-teal w-full">
      <div className="px-xs md:px-sm lg:px-lg py-md md:py-lg lg:py-2xl">
        <div className="promo__inner max-w-[1240px] mx-auto place-items-center">
          <h2 className="pb-3xs text-center">{t("promoTitle")}</h2>
          <p className="narrow text-center text-sm pb-sm md:pb-md">
            {t("promoDescription")}
          </p>
          <div className="promo__cards grid grid-cols-1 min-[920px]:grid-cols-3 gap-xs xl:gap-sm">
            {translatedCards.map((card, index) => (
              <PromoCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                image={card.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
