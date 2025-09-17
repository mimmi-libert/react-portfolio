import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslatedSkillsList } from "./about-data";

function Skills() {
  const { t } = useLanguage();

  // Get the translated skills list
  const translatedSkillsList = getTranslatedSkillsList(t);

  return (
    <ul className="flex flex-col gap-2xs">
      {translatedSkillsList.map((skill, index) => (
        <li
          key={index}
          className="flex font-poppins gap-x-2xs [&>svg]:shrink-0 [&>svg]:w-[12px] [&>svg]:h-[12px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="mt-1"
          >
            <path
              d="M2 8C2 4.68667 4.68667 2 8 2C11.3133 2 14 4.68667 14 8C14 11.3133 11.3133 14 8 14C4.68667 14 2 11.3133 2 8Z"
              fill="#705D56"
              fillOpacity="0.3"
              stroke="#32292F"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="flex flex-wrap gap-3xs">
            <span className="text-xs normal-case text-brown">
              {skill.category}
            </span>
            <span className="font-light text-xs">{skill.description}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Skills;
