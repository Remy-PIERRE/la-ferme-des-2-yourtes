export const getProductPageContainer = () => {
  const container = document.querySelector(".productPage__container");
  return container;
};

export const getProductPageTemplate = () => {
  const template = document
    .querySelector("#productPageMainTemplate")
    .content.cloneNode(true);
  return template;
};

export const getProductPageTitle = (template) => {
  const title = template.querySelector("h1");
  return title;
};

export const getProductPageDescriptionShort = (template) => {
  const description = template.querySelector("h2");
  return description;
};

export const getProductPageCarrouselImagesContainer = (template) => {
  const container = template.querySelector(".productPage__carrousel__images");
  return container;
};

export const getProductPageCarrouselSection = (template) => {
  const section = template.querySelector(".productPage__carrousel__section");
  return section;
};

export const getProductPageCarrouselMiniSections = (template) => {
  const sections = [
    ...template.querySelectorAll(".productPage__carrousel__miniSection"),
  ];
  return sections;
};

export const getProductPageDescriptionLong = (template) => {
  const description = template.querySelector(".productPage__description p");
  return description;
};
