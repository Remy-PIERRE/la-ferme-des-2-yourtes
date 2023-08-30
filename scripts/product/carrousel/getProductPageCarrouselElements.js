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
