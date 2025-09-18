import React from "react";
import MainCase from "./MainCase";
import SecondaryCase from "./SecondaryCase";
import { secondaryCaseData } from "./portfolio-data";
import { useLanguage } from "../../context/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  return (
    <section
      id="portfolio"
      className="grid bg-black border-b-[32px] border-teal"
      aria-labelledby="portfolio-heading"
    >
      <div className="px-xs md:px-sm py-md md:py-lg lg:py-2xl lg:px-lg">
        <div className="portfolio__inner max-w-[1240px] mx-auto grid">
          <h2 id="portfolio-heading" className="text-white">
            Portfolio.
          </h2>

          <div
            className="cases grid gap-sm sm:gap-md"
            aria-label="Portfolio cases"
          >
            <MainCase />
            <div className="grid md:grid-cols-2 gap-sm md:gap-md">
              {secondaryCaseData.map((caseItem, index) => (
                <SecondaryCase
                  key={index}
                  id={caseItem.id}
                  category={caseItem.category}
                  organization={caseItem.organization}
                  image={caseItem.image}
                  status={caseItem.status}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
