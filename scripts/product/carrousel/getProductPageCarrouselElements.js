export const getProductPageCarrouselImageContainer = (template) => {
  const container = template.querySelector(".productPage__carrousel__images");
  return container;
};

export const getProductPageCarrouselImageTemplate = (pageTemplate) => {
  const template = pageTemplate
    .querySelector("#productPageCarrouselImageTemplate")
    .content.cloneNode(true);
  return template;
};

export const getProductPageCarrouselImage = (template) => {
  const image = template.querySelector("img");
  return image;
};

export const getProductPageCarrousselMiniContainer = (template) => {
  const container = template.querySelector(
    ".productPage__carrousel__miniContainer"
  );
  return container;
};

export const getProductPageCarrouselMiniImageTemplate = (pageTemplate) => {
  const template = pageTemplate
    .querySelector("#productPageCarrouselMiniImageTemplate")
    .content.cloneNode(true);
  return template;
};

export const getProductPageCarrouselMiniImageImage = (template) => {
  const image = template.querySelector("img");
  return image;
};

export const getProductPageCarrouselMiniImages = () => {
  const images = document.querySelectorAll(
    ".productPage__carrousel__miniImage__wrapper"
  );
  return images;
};

export const getProductPageCarrouselMiniWrapper = (template) => {
  const wrapper = template.querySelector(
    ".productPage__carrousel__miniImage__wrapper"
  );
  return wrapper;
};

export const getProductPageCarrouselImageContainerAfterInsert = () => {
  const container = document.querySelector(".productPage__carrousel__images");
  return container;
};
