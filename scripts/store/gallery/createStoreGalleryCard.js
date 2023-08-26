import { insertElement } from "../../utils/insertElements.js";
import {
  getStoreGalleryContainer,
  getStoreGalleryTemplate,
} from "./getStoreGalleryElements.js";
import {
  setStoreGalleryCardAnchor,
  setStoreGalleryCardCover,
  setStoreGalleryCardDescription,
  setStoreGalleryCardTitle,
} from "./setStoreGalleryElements.js";

export const createStoreGalleryCard = (data) => {
  const { id, title, descriptionShort, cover } = data;

  const container = getStoreGalleryContainer();
  const template = getStoreGalleryTemplate();

  setStoreGalleryCardAnchor(template, id);
  setStoreGalleryCardCover(template, cover, title);
  setStoreGalleryCardTitle(template, title);
  setStoreGalleryCardDescription(template, descriptionShort);

  insertElement(container, template);
};
