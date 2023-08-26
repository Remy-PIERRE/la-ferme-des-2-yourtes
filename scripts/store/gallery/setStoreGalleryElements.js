import { getElementAnchor } from "../../utils/getElements.js";
import {
  getStoreGalleryCardDescription,
  getStoreGalleryCardImage,
  getStoreGalleryCardTitle,
} from "./getStoreGalleryElements.js";

export const setStoreGalleryCardAnchor = (template, id) => {
  const anchor = getElementAnchor(template);
  anchor.id = id;
};

export const setStoreGalleryCardCover = (template, src, alt) => {
  const image = getStoreGalleryCardImage(template);
  image.src = src;
  image.alt = alt;
};

export const setStoreGalleryCardTitle = (template, text) => {
  const title = getStoreGalleryCardTitle(template);
  title.innerHTML = `${text}`;
};

export const setStoreGalleryCardDescription = (template, text) => {
  const description = getStoreGalleryCardDescription(template);
  description.innerHTML = `${text}`;
};