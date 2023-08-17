export const getGalleryCardsContainer = () => {
  const container = document.querySelector(".gallery__cards__container");
  return container;
};

export const getGalleryCardTemplate = () => {
  const template = document
    .querySelector("#galleryCardTemplate")
    .content.cloneNode(true);
  return template;
};

export const getGalleryCardWrapper = (template) => {
  const wrapper = template.querySelector(".gallery__card__wrapper");
  return wrapper;
};

export const getGalleryCardImage = (template) => {
  const image = template.querySelector(".gallery__card__image img");
  return image;
};

export const getGalleryCardName = (template) => {
  const name = template.querySelector(".gallery__card__content h3");
  return name;
};

export const getGalleryDescription = (template) => {
  const description = template.querySelector(".gallery__card__content p");
  return description;
};
