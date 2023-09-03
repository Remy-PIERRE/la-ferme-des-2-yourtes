export const getHomeGalleryContainer = () => {
  const container = document.querySelector(".gallery__cards__container");
  return container;
};

export const getHomeGalleryCardTemplate = () => {
  const template = document
    .querySelector("#galleryCardTemplate")
    .content.cloneNode(true);
  return template;
};

export const getHomeGalleryCardWrapper = (template) => {
  const wrapper = template.querySelector(".gallery__card__wrapper");
  return wrapper;
};

export const getHomeGalleryCardImage = (template) => {
  const image = template.querySelector("img");
  return image;
};

export const getHomeGalleryCardTitle = (template) => {
  const title = template.querySelector("h3");
  return title;
};

export const getHomeGalleryCardDescription = (template) => {
  const description = template.querySelector("p");
  return description;
};

export const getHomeGalleryCards = () => {
  const cards = [...document.querySelectorAll(".gallery__card__wrapper")];
  return cards;
};
