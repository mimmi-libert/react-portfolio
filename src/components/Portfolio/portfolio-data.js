// Define the data structure without any imports
const mainCaseData = [
  {
    id: "swedish-aral-sea-society",
    type: "case",
    status: "under-construction",
    figmaUrl:
      "https://www.figma.com/design/aPQeg6KhUAwHxyig1uXwgS/SASS?node-id=146-218&t=kNUFnM03FpAV7xpC-1",
    gitUrl: "https://github.com/mimmi-libert/sass-demo.git",
    category: {
      visualBranding: true,
      webDesign: true,
      webDevelopment: true,
    },
    tools: {
      figma: true,
      adobeIllustrator: true,
      adobePhotoshop: true,
      wordpress: true,
      htmlJsCSS: true,
    },
    organization: "Swedish Aral Sea Society", // Default English
    description:
      "The Swedish Aral Sea Society is undergoing a renewal of its visual identity and website. A new logo and web design has been developed to highlight the organization's environmental focus, with a full migration from Joomla to WordPress planned for autumn 2025 to ensure a modern, flexible platform for future growth.",
    image: "/assets/images/SASS-thumbnail.png",
    fullDescription: [
      "The Swedish Aral Sea Society is a Sweden-based non-profit organization working to strengthen democracy and promote sustainable development in Central Asia, notably in the Aral Sea region. Founded in the late 90s, the organization has now begun the process of modernizing and clarifying its visual identity and website.",
      "I chose this organization as my final school project, with the goal of creating a platform featuring a clear, user-friendly structure and streamlined content presentation to better communicate their mission. As part of this, I developed an updated logo and design that highlight the society's environmental focus—drawing inspiration from the region's climate challenges while reflecting a tone of hope and progress aligned with their work.",
      "My next step in the collaboration with SASS is to migrate the website from Joomla to WordPress during early autumn 2025, ensuring a modern, flexible solution tailored to the organization's needs and future growth. Until the full migration is complete, I have created a basic prototype to visualize the new structure and design approach, helping the organization explore content placement, navigation, and branding direction.",
    ],
    gallery: [
      "/assets/images/SASS-gallery-image-6.png",
      "/assets/images/SASS-gallery-image-hero.png",
      "/assets/images/SASS-gallery-image-mobile.png",
      "/assets/images/SASS-gallery-image-our-work.png",
      "/assets/images/SASS-gallery-image-articles.png",
      "/assets/images/SASS-gallery-image-logo-standing.png",
    ],
  },
];

const secondaryCaseData = [
  {
    id: "swingkatten",
    type: "case",
    status: "under-construction",
    figmaUrl:
      "https://www.figma.com/design/FDHsq8UbBz0yAIbcK4xU7t/Swingkatten?node-id=0-1&t=N70CfKJjldLzR1dd-1",
    category: {
      webDesign: true,
      webDevelopment: true,
    },
    tools: {
      figma: true,
      wordpress: true,
      adobeIllustrator: true,
    },
    organization: "Swingkatten",
    image: "/assets/images/swingkatten-thumbnail.png",
    description: "Brief description of Swingkatten project",
    fullDescription: [
      "Swingkatten is an Uppsala-based swing dance association that offers year-round classes and activities. The organization is currently working to rebuild its membership base to pre-Covid levels. Having been a member of Swingkatten for several years, I recently joined the web team to contribute my skills to the redesign and rebuild of the website in WordPress (Divi).",
      "The project focuses on maintaining and strengthening the association's visual identity while restructuring the site to better meet the needs and expectations of its members and wider audience. Ahead of the official launch in early autumn 2025, I am applying the redesign to the web team's working prototype to test navigation, layout, and content flow, ensuring the design effectively supports both new visitors and returning members. My next step in the collaboration is to finalize the WordPress implementation and optimize the site for long-term usability, flexibility, and ease of maintenance.",
    ],
    gallery: [
      "/assets/images/swingkatten-gallery-image-1.png",
      "/assets/images/swingkatten-gallery-image-2.png",
      "/assets/images/swingkatten-gallery-image-4.png",
      "/assets/images/swingkatten-gallery-image-3.png",
      "/assets/images/swingkatten-gallery-image-5.png",
      "/assets/images/swingkatten-gallery-image-6.png",
    ],
  },
  {
    id: "nordanvind",
    type: "case",
    status: "completed",
    pdfUrl: "/assets/pdfs/nordanvind-grafisk-profil.pdf",
    pdfName: "Ladda ner Grafisk Profil",
    category: {
      visualBranding: true,
    },
    tools: {
      figma: true,
      adobeIllustrator: true,
      adobePhotoshop: true,
    },
    organization: "Nordanvind",
    image: "/assets/images/nv-thumbnail.jpg",
    description: "Brief description of Nordanvind project",
    fullDescription: [
      "Nordanvind is a fictional energy company investing in sustainable energy sources and solutions to create a greener future for generations to come. By harnessing the power of wind, sun, and water, the company contributes to the transition toward a carbon-neutral world. Nordanvind believes in uniting innovation with environmental responsibility and sought to communicate this through an effective, modern, and recognizable visual identity.",
      "As part of this work, a logo and graphic profile were developed to reflect the company’s core values: sustainability, reliability, and optimism for the future. The slogan 'The power that lights up everyday magic' highlights the simple, down-to-earth moments that define our lives – moments we often take for granted, yet which depend on sustainable energy to endure. In Sweden, where light and warmth are vital for both survival and community, Nordanvind provides the energy that allows people to thrive. The graphic identity combines human presence with the dynamics of nature, where the contrast between light and darkness symbolizes not only energy and sustainability, but also hope and opportunities for the future.",
    ],
    gallery: [
      "/assets/images/nv-about-logo.png",
      "/assets/images/nv-colors.png",
      "/assets/images/nv-desktop.png",
      "/assets/images/nv-mobile.png",
      "/assets/images/nv-image-usage.png",
      "/assets/images/nv-logo.png",
    ],
  },
];

// Helper function to get all cases
export const getAllCases = () => {
  return [...mainCaseData, ...secondaryCaseData];
};

// Helper function to get case by ID
export const getCaseById = (id) => {
  const allCases = getAllCases();
  return allCases.find((caseItem) => caseItem.id === id);
};

// Export the data arrays directly
export { mainCaseData, secondaryCaseData };
