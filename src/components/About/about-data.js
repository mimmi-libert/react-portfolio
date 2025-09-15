// Define the data structure with default English text AND translation keys
const skillsList = [
  {
    type: "skill",
    translationKey: "uiDesign",
    category: "UI Design:",
    description: "Figma, Adobe Illustrator & Adobe Photoshop.",
  },
  {
    type: "skill",
    translationKey: "webDevelopment",
    category: "Web development:",
    description: "HTML, CSS, JS, Wordpress, React, Tailwind, Sass.",
  },
  {
    type: "skill",
    translationKey: "developmentTools",
    category: "Development tools:",
    description: "Git.",
  },
  {
    type: "skill",
    translationKey: "contentCopy",
    category: "Content and Copy:",
    description:
      "Experienced in turning ideas into clear, accessible communication.",
  },
  {
    type: "skill",
    translationKey: "languages",
    category: "Languages:",
    description:
      "Fluent in English and Swedish (and a little rusty in French).",
  },
  {
    type: "skill",
    translationKey: "specialSkills",
    category: "Special Skills:",
    description:
      "Bench pressing & crossword puzzles. Oh - and I'm a pretty decent dancer too!",
  },
];

const workExperienceList = [
  {
    type: "work-experience",
    translationKey: "brfUtsikten",
    organization: "BrfUtsikten",
    task: "Web Design & Web Development",
    date: "September 2025 - present",
    description:
      "Interning part-time at a web agency as a web designer and front-end developer. At Balonka, I had the opportunity to create designs and rebuild several websites in WordPress (Divi), based on client needs and specifications.",
    dateObject: new Date("2025-09-01"),
  },
  {
    type: "work-experience",
    translationKey: "balonka",
    organization: "Balonka",
    task: "Internship",
    date: "May 2025 - June 2025",
    description:
      "Interning part-time at a web agency as a web designer and front-end developer. At Balonka, I had the opportunity to create designs and rebuild several websites in WordPress (Divi), based on client needs and specifications.",
    dateObject: new Date("2025-05-01"),
  },
  {
    type: "work-experience",
    translationKey: "swingkatten",
    organization: "Swingkatten",
    task: "Redesign & Web development",
    date: "June 2025 - present",
    description:
      "As part of the local Uppsala Swing Dance organization's web team, I'm currently leading the redesign and rebuild of the website in WordPress. The focus has been on maintaining and strengthening the organization's visual identity, while restructuring the site to better align with the needs and expectations of its users.",
    dateObject: new Date("2025-06-01"),
  },
  {
    type: "work-experience",
    translationKey: "swedishAralSeaSociety",
    organization: "Swedish Aral Sea Society",
    task: "Visual branding, Web Design & Web Development",
    date: "May 2025 - present",
    description:
      "Currently contributing to the renewal of the organization's web site and logo, with a focus on visual clarity, user-friendly navigation and streamlined content. As part of this work, I'm developing a new website in WordPress (migrating from Joomla), tailored to the organization's specific needs.",
    dateObject: new Date("2025-05-01"),
  },
  {
    type: "work-experience",
    translationKey: "stordammensSkola",
    organization: "Stordammens skola & Korsängsskolan",
    task: "Mathematics teacher",
    date: "August 2021 - August 2024",
    description: "Teaching mathematics for grades 6 through 9.",
    dateObject: new Date("2021-08-01"),
  },
];

const educationList = [
  {
    type: "education",
    translationKey: "karlskogaFolkhogskola",
    school: "Karlskoga Folkhögskola",
    program: "Web Design & Web Development",
    date: "August 2024 - June 2025",
    description:
      "Comprehensive education in web design (UI/UX), web development/programming and graphic design. The course content was tailored to current standards and prevailing trends.",
    dateObject: new Date("2024-08-01"),
  },
  {
    type: "education",
    translationKey: "uppsalaUniversityMath",
    school: "Uppsala University",
    program: "Bachelors Degree, Mathematics",
    date: "August 2016 - June 2021",
    description:
      "The program included coursework in mathematics, mathematical statistics, numerical analysis and programming.",
    dateObject: new Date("2016-08-01"),
  },
  {
    type: "education",
    translationKey: "uppsalaUniversityTeaching",
    school: "Uppsala University",
    program: "Upper Secondary Teaching Degree, Mathematics & French",
    date: "August 2016 - June 2021",
    description:
      "The Secondary Education Program qualifies for teaching certification in Mathematics and French at both middle and high school levels.",
    dateObject: new Date("2016-08-01"),
  },
  {
    type: "education",
    translationKey: "wiksFolkhogskola",
    school: "Wiks Folkhögskola",
    program: "Writers Program",
    date: "August 2015 - August 2016",
    description:
      "Completed a one year program in literary writing, exploring literary composition across various genres with a primary focus on fiction.",
    dateObject: new Date("2015-08-01"),
  },
];

// Export the raw data arrays
export { skillsList, workExperienceList, educationList };

// Export helper functions for getting translated data
export const getTranslatedSkillsList = (t) => {
  return skillsList.map((skill) => ({
    ...skill,
    category:
      t(`skillsList.${skill.translationKey}.category`) || skill.category,
    description:
      t(`skillsList.${skill.translationKey}.description`) || skill.description,
  }));
};

export const getTranslatedWorkExperienceList = (t) => {
  return workExperienceList.map((work) => ({
    ...work,
    organization:
      t(`workExperience.${work.translationKey}.organization`) ||
      work.organization,
    task: t(`workExperience.${work.translationKey}.task`) || work.task,
    date: t(`workExperience.${work.translationKey}.date`) || work.date,
    description:
      t(`workExperience.${work.translationKey}.description`) ||
      work.description,
  }));
};

export const getTranslatedEducationList = (t) => {
  return educationList.map((education) => ({
    ...education,
    school:
      t(`education.${education.translationKey}.school`) || education.school,
    program:
      t(`education.${education.translationKey}.program`) || education.program,
    date: t(`education.${education.translationKey}.date`) || education.date,
    description:
      t(`education.${education.translationKey}.description`) ||
      education.description,
  }));
};

export const getTranslatedTimelineItems = (t) => {
  const translatedWork = getTranslatedWorkExperienceList(t);
  const translatedEducation = getTranslatedEducationList(t);
  return [...translatedWork, ...translatedEducation].sort(
    (a, b) => b.dateObject.getTime() - a.dateObject.getTime()
  );
};
