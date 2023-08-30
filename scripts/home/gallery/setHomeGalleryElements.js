import {
  getHomeGalleryCardWrapper,
  getHomeGalleryCardImage,
  getHomeGalleryCardTitle,
  getHomeGalleryCardDescription,
} from "./getHomeGalleryElements.js";

export const setHomeGalleryCardWrapper = (template, id, href) => {
  const wrapper = getHomeGalleryCardWrapper(template);
  wrapper.id = id;
  wrapper.href = `/produit/${href}`;
};

export const setHomeGalleryCardImage = (template, src, alt) => {
  const image = getHomeGalleryCardImage(template);
  image.src = src;
  image.alt = alt;
};

export const setHomeGalleryCardTitle = (template, text) => {
  const title = getHomeGalleryCardTitle(template);
  title.innerHTML = `${text}`;
};

export const setHomeGalleryCardDescription = (template, text) => {
  const description = getHomeGalleryCardDescription(template);
  description.innerHTML = `${text}`;
};
