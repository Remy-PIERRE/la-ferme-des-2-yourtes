export const getStoreGalleryContainer = () => {
  const container = document.querySelector(
    ".store__gallery__products__container"
  );
  return container;
};

export const getStoreGalleryTemplate = () => {
  const template = document
    .querySelector("#galleryCardTemplate")
    .content.cloneNode(true);
  return template;
};

export const getStoreGalleryCardImage = (template) => {
  const image = template.querySelector(".gallery__card__image img");
  return image;
};

export const getStoreGalleryCardTitle = (template) => {
  const title = template.querySelector("h3");
  return title;
};

export const getStoreGalleryCardDescription = (template) => {
  const descritpion = template.querySelector("p");
  return descritpion;
};
