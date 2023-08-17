import {
  getGalleryCardImage,
  getGalleryCardName,
  getGalleryCardWrapper,
  getGalleryDescription,
} from "./getGalleryElements.js";

export const setGalleryCardWrapper = (template, id) => {
  const wrapper = getGalleryCardWrapper(template);
  wrapper.id = id;
};

export const setGalleryCardImage = (template, src, alt) => {
  const image = getGalleryCardImage(template);
  image.src = src;
  image.alt = alt;
};

export const setGalleryCardName = (template, text) => {
  const name = getGalleryCardName(template);
  name.innerHTML = `${text}`;
};

export const setGalleryCardDescription = (template, text) => {
  const description = getGalleryDescription(template);
  description.innerHTML = `${text}`;
};
