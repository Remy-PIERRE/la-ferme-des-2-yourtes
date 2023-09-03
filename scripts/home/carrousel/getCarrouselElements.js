export const getCarrouselContainer = () => {
  const container = document.querySelector(".carrousel__sections__container");
  return container;
};

export const getCarrouselContainerSections = () => {
  const sectionsList = [
    ...document.querySelectorAll(".carrousel__section__wrapper"),
  ];
  return sectionsList;
};

export const getCarrouselSectionTemplate = () => {
  const template = document
    .querySelector("#carrouselSectionTemplate")
    .content.cloneNode(true);
  return template;
};

export const getCarrouselSectionWrapper = (template) => {
  const wrapper = template.querySelector(".carrousel__section__wrapper");
  return wrapper;
};

export const getCarrouselSectionImage = (template) => {
  const image = template.querySelector(".carrousel__section__image img");
  return image;
};

export const getCarrouselSectionTitle = (template) => {
  const title = template.querySelector(".carrousel__content__title h2");
  return title;
};

export const getCarrouselSectionDescription = (template) => {
  const description = template.querySelector(
    ".carrousel__content__description h3"
  );
  return description;
};

export const getCarrouselSectionCta = (template) => {
  const button = template.querySelector(".carrousel__content__cta button");
  return button;
};

export const getCarrouselPrevButton = () => {
  const button = document.querySelector("#carrouselPrevButton");
  return button;
};

export const getCarrouselNextButton = () => {
  const button = document.querySelector("#carrouselNextButton");
  return button;
};

export const getCarrouselSectionbackground = (template) => {
  const background = template.querySelector(".carrousel__content__wrapper");
  return background;
};
