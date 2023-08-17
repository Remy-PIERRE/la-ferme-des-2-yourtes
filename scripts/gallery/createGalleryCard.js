import { insertElement } from "../utils/insertElements.js";
import {
  getGalleryCardTemplate,
  getGalleryCardsContainer,
} from "./getGalleryElements.js";
import {
  setGalleryCardWrapper,
  setGalleryCardImage,
  setGalleryCardName,
  setGalleryCardDescription,
} from "./setGalleryElements.js";

export const createGalleryCard = (data) => {
  const { id, name, descriptionShort, cover, favoris } = data;

  if (favoris) {
    const container = getGalleryCardsContainer();
    const template = getGalleryCardTemplate();

    setGalleryCardWrapper(template, id);
    setGalleryCardImage(template, cover, name);
    setGalleryCardName(template, name);
    setGalleryCardDescription(template, descriptionShort);

    insertElement(container, template);
  }
};
